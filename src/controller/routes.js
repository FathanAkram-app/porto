import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import NoPage from "../pages/nopage";

export default function RoutesController() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

