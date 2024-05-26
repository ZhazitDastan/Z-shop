import './App.css'
import Header from "./components/Header.jsx";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import AppRouter from "./AppRouter.jsx";




function App() {
    return (
        <>
            <Header />
            
        </> 
    );
}

export default App
