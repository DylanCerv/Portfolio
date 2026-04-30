import { createBrowserRouter } from "react-router-dom";

/** **** **** **** **** *****
 * PAGES
 **** **** **** **** ***** */
import Landing from "../pages/Landing";
import NewPortfolio from "../pages/NewPortfolio";
import PageNotFound from "../pages/Errors/PageNotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <NewPortfolio />,
    },
    {
        path: '/classic',
        element: <Landing />,
        children: [],
    },
    {
        path: '/new-portfolio',
        element: <NewPortfolio />,
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]);