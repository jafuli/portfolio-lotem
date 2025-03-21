import {Navigate, RouteObject} from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Works from "./pages/Works/Works.tsx";

const Routes: RouteObject[] = [
  {
    path: '',
    element: (
      <Layout>
        <Navigate to="/works" replace/>
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFound/>
      </Layout>
    ),
  },
  {
    path: '/works',
    element: <Works/>,
  }
  // children: [
  //     {
  //       path: 'superwise',
  //       element: <Superwise/>
  //     },
  //     {
  //       path: 'captain-credit',
  //       element: <CaptainCredit/>
  //     },
  //     {
  //       path: 'punct',
  //       element: <Punct/>
  //     },
  //     {
  //       path: 'obli',
  //       element: <Obli/>
  //     }
  //   ]
  // },
  // {
  //   path: '/about',
  //   element: <About/>
  // },
  // {
  //   path: '/contact',
  //   element: <Contact/>
  // },
];

export default Routes;
