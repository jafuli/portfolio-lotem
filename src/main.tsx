import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Routes from './routes';
import {Global} from '@emotion/react';
import globalStyles from './globalStyles';

import './icon-cache';

const allRoutes = createBrowserRouter(Routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyles}/>
    <RouterProvider router={allRoutes}/>
  </StrictMode>,
)
