import {Navigate, RouteObject} from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Works from "./pages/Works/Works";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Superwise from "./pages/Works/Superwise.tsx";
import CaptainCredit from "./pages/Works/CaptainCredit.tsx";
import Punct from "./pages/Works/Punct.tsx";
import Obli from "./pages/Works/Obli.tsx";

const Routes: RouteObject[] = [
  {
    path: '',
    element: <Layout/>,
    errorElement: <Layout><NotFound/></Layout>,
    children: [
      {
        index: true,
        element: <Navigate to="/works" replace/>,
      },
      {
        path: 'works',
        children: [
          {
            index: true,
            element: <Works/>,
          },
          {
            path: 'superwise',
            element: <Superwise/>,
          },
          {
            path: 'captain-credit',
            element: <CaptainCredit/>,
          },
          {
            path: 'punct',
            element: <Punct/>,
          },
          {
            path: 'obli',
            element: <Obli/>,
          },
        ],
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: '*',
        element: <NotFound/>
      }

    ],
  },
];

export default Routes;
