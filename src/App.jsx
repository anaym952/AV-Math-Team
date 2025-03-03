
import './App.css'
import { Navbar, Home, Team, Scores, Events, Footer } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

    const routes = createBrowserRouter([
        {
          path: "/",
          element: <><Navbar/><Home/><Footer/></>
        },
        {
          path: "/team",
          element: <><Navbar/><Team/><Footer/></>
        },
        {
          path: "/past-scores",
          element: <><Navbar/><Scores/><Footer/></>
        },
        {
            path: "/events",
            element: <><Navbar/><Events/><Footer/></>
        }
      ])
    
      return (
        <div>
          <RouterProvider router={routes}/>
        </div>
      )

}

export default App
