import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default createBrowserRouter(
  [
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Page1 />,
        },
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
        {
          path: "/page3",
          element: <Page3 />,
        },
      ],
    },
  ],
  {
    basename: "/home",
  }
);
