import { createBrowserRouter } from "react-router";

import FavoriteList from "../pages/FavoriteList";
import Homepage from "../pages/Homepage";
import SpellDetail from "../pages/SpellDetail";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/favorite-list",
        element: <FavoriteList />,
      },
      {
        path: "/spell/:index",
        element: <SpellDetail />,
      },
    ],
  },
]);

export default router;
