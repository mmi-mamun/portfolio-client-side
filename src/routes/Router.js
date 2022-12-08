import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../individualSection/AllProjects";
import Skills from "../individualSection/Skills";
import Main from "../layout/Main";
import About from "../pages/About";
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
                path: '/projects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    }
])

export default router;