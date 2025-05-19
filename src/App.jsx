import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import { RecipiesProvider } from "./contexts/RecipiesContext";
import Recipe from "./components/Recipe";

function App() {
  return (
    <RecipiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </RecipiesProvider>
  );
}

export default App;
