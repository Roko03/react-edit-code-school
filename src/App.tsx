import { RouterProvider } from "react-router-dom";
import "./app.scss";
import router from "./Routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
