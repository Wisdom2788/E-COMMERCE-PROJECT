import { createBrowserRouter } from "react-router";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Category from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true,
             element: <Home/>},
            { path: "category/:categoryName", element:<Category /> },
            { path: "product/:productId", element: <ProductDetail /> },
            { path: "cart", element: <Cart /> },
        ],
    },
]);

export default router;