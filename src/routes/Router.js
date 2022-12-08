import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import FourOFour from "../pages/FourOFour";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    }
])

export default router;