import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import Donation from '../Donation/Donation';
import Statistics from '../Statistics/Statistics';
import Card from '../Phone/Card';


const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/cards/:id',
                element: <Card></Card>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default createdRoute;