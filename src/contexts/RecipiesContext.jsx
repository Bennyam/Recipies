import { createContext, useContext, useEffect, useReducer } from "react";

const RecipiesContext = createContext();

const API_URL = "https://forkify-api.jonas.io/api/v2/recipes/";
const resultsPerPage = 10;

const initialState = {
  recipies: [],
  recipeDetails: {},
  servings: null,
  bookmarks: JSON.parse(localStorage.getItem("bookmarks")) || [],
  selectedID: null,
  isLoading1: false,
  isLoading2: false,
  error1: null,
  error2: null,
  curPage: 1,
  pages: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading/recipies":
      return { ...state, isLoading1: true, error1: null, error2: null };
    case "loading/recipeDetails":
      return { ...state, isLoading2: true, error1: null, error2: null };
    case "recipies/loaded":
      return {
        ...state,
        recipies: action.payload,
        isLoading1: false,
        error1: null,
        error2: null,
        curPage: 1,
        pages: Math.ceil(action.payload.length / resultsPerPage),
      };
    case "select/recipe":
      return {
        ...state,
        selectedID: action.payload,
      };
    case "recipeDetails/loaded":
      return {
        ...state,
        recipeDetails: action.payload,
        isLoading2: false,
        error1: null,
        error2: null,
        servings: action.payload.servings,
      };
    case "error1":
      return { ...state, error1: action.payload, isLoading1: false };
    case "error2":
      return { ...state, error2: action.payload, isLoading2: false };
    case "pageUp":
      return {
        ...state,
        curPage:
          state.curPage < state.pages ? state.curPage + 1 : state.curPage,
      };
    case "pageDown":
      return {
        ...state,
        curPage: state.curPage > 1 ? state.curPage - 1 : state.curPage,
      };
    case "servings/inc":
      return { ...state, servings: state.servings + 1 };
    case "servings/dec":
      return {
        ...state,
        servings: state.servings > 1 ? state.servings - 1 : state.servings,
      };
    case "bookmarks/toggle":
      return {
        ...state,
        bookmarks: state.bookmarks
          .map((rec) => rec.id)
          .includes(state.recipeDetails.id)
          ? state.bookmarks.filter((rec) => rec.id !== state.recipeDetails.id)
          : [...state.bookmarks, state.recipeDetails],
        recipeDetails: {
          ...state.recipeDetails,
          bookmarked: !state.recipeDetails.bookmarked,
        },
      };
  }
}

function RecipiesProvider({ children }) {
  const [
    {
      recipies,
      recipeDetails,
      servings,
      bookmarks,
      selectedID,
      isLoading1,
      isLoading2,
      error1,
      error2,
      curPage,
      pages,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function searchRecipies(query) {
    dispatch({ type: "loading/recipies" });

    try {
      const res = await fetch(`${API_URL}?search=${query}`);
      const { data } = await res.json();
      if (!data.recipes.length) throw new Error("Query not found!");
      dispatch({ type: "recipies/loaded", payload: data.recipes });
    } catch (err) {
      dispatch({
        type: "error1",
        payload: { icon: "‼️", text: `${err.message}` },
      });
    }
  }

  useEffect(
    function () {
      async function loadRecipeDetails() {
        dispatch({ type: "loading/recipeDetails" });

        try {
          const res = await fetch(`${API_URL}${selectedID}`);
          const { data } = await res.json();
          console.log(data);
          const newRecipe = bookmarks
            .map((rec) => rec.id)
            .includes(data.recipe.id)
            ? { ...data.recipe, bookmarked: true }
            : { ...data.recipe, bookmarked: false };
          dispatch({ type: "recipeDetails/loaded", payload: newRecipe });
        } catch (err) {
          dispatch({
            type: "error2",
            payload: { icon: "‼️", text: `${err.message}` },
          });
        }
      }
      if (!selectedID) return;
      loadRecipeDetails();
    },
    [selectedID]
  );

  useEffect(
    function () {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    },
    [bookmarks]
  );

  return (
    <RecipiesContext.Provider
      value={{
        recipies,
        recipeDetails,
        servings,
        bookmarks,
        selectedID,
        searchRecipies,
        isLoading1,
        isLoading2,
        error1,
        error2,
        pages,
        resultsPerPage,
        curPage,
        dispatch,
      }}
    >
      {children}
    </RecipiesContext.Provider>
  );
}

function useRecipies() {
  const context = useContext(RecipiesContext);
  if (context === undefined)
    throw new Error("RecipiesContext was used outside RecipiesProvider");
  return context;
}

export { RecipiesProvider, useRecipies };
