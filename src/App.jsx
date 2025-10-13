import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
