import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Favorite from "../pages/Favorites";


const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
            </Route>
        </Routes>
    )
}
export default RoutesApp