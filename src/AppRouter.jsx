import Header from "./components/Header.jsx";
import {Routes, Route, BrowserRouter as Router, useLocation} from "react-router-dom";
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
import {Footer} from "./components/Footer.jsx";

function AppRouter ()  {
    
    return (
        <>
          <Router>
              <Content/>
          </Router>
        </>
    );
    
}

function Content () {
    const location = useLocation();
    const noRoutes = ['/login', '/register']
    
    const isNotFoundRoute = ![
        '/',
        '/products',
        '/about',
        '/contact',
        '/profile',
        '/cart',
        '/favorites'
    ].includes(location.pathname)
    
    return (
        <>
            {!noRoutes.includes(location.pathname) && !isNotFoundRoute && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {!noRoutes.includes(location.pathname)&& !isNotFoundRoute && <Footer />}
        </>
    )
}

export default AppRouter