import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import FetchMethod from './pages/FetchMethod'
import AxiosMethod from './pages/AxiosMethod'


const router = createBrowserRouter([
    {
        path: "/", element: <App />,
        errorElement: <div>404: Not Found</div>,
        children: [
            { index: true, element: <Home /> },
            { path: "fetch-method", element: <FetchMethod /> },
            { path: "axios-method", element: <AxiosMethod /> },
        ]
    }
]
)

export default router