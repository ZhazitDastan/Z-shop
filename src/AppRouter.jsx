import Header from "./components/Header.jsx";
import {Routes, Route,BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";


function AppRouter ()  {
   
    return (
        <Router>
           <>
               <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/cart" element={Cart}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                         <Route path="*" element={<NotFound />} /> 
                    </Routes>
           </>
        </Router>
    );
    
}

export default AppRouter