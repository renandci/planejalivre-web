import "./style/fontawesome/css/solid.min.css";
import "./style/fontawesome/css/brands.min.css";
import "./style/fontawesome/css/regular.min.css";
import "./style/fontawesome/css/fontawesome.min.css";
import "./style/app.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import App from "./App";

import { Home } from "./Home";
import { Contact } from "./Contact";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>Planeja Livre</title>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <Helmet>
              <title>Contato - Planeja Livre</title>
            </Helmet>
            <Contact />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,
);
