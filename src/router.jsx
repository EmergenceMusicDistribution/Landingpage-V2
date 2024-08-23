import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { Home } from './pages/home'
import { Register } from './pages/register'

const router = createBrowserRouter([
 {
    path : '/', 
    element : <RootLayout/>, 
    children : [
        {
            path:'/', 
            element:<Home/>,
            index:true
        },
        {
            path:'/register', 
            element:<Register/>,
        },
    ]
 }
])

export default router