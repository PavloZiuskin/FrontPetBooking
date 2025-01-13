
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/homePage/HomePage";
import About from "./pages/aboutPage/AboutPage";
import Hotels from "./pages/hotelPage/HotelPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { destinationsLoader } from "./components/loaders/destinationLoader";
import { hotelsLoader } from "./components/loaders/hotelLoader";
import "./style/global.css";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    loader: destinationsLoader,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "hotels",
                    element: <Hotels />,
                    loader: hotelsLoader,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
);

export default function App() {
    return <RouterProvider router={router} />;
}
