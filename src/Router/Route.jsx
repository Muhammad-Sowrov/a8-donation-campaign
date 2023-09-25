import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";

const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=> fetch('/fake.json')
            },
            {
              path: "/donation",
              element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics> 
            },
            {
                path: '/donation/:id',
                element: <Donation></Donation>,
                loader: ()=> fetch('/fake.json')
            }
        ]
    }
])

export default myRoute;