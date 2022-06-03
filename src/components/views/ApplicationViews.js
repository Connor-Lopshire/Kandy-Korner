import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "./Locations"
import { Proctucts } from "./Products"
export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    

                    <Outlet />
                </>
            }>

                <Route path="Locations" element={ <Locations /> } />
				<Route path="Products" element={ <Proctucts /> } />
            
            </Route>
        </Routes>
    )
	
}

