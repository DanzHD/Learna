import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Auth from "./Pages/Auth/Auth.tsx";
import Main from "./Pages/Main/Main.tsx";
import {ThemeContextProvider} from "./Contexts/ThemeContext/ThemeContext.tsx";



function App() {

    return (
        <ThemeContextProvider>
            <Router  />
        </ThemeContextProvider>
    )

}

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Home />
        },
        {
            path: "auth",

            element: <Auth />

        },
        {
            path: "main",
            element: <Main />
        }
    ])

    return <RouterProvider router={router} />
}

export default App
