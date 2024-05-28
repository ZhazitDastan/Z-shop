import './App.css'
import AppRouter from "./AppRouter.jsx";
import {CssBaseline} from "@mui/material";
import GlobalStyles from "./GlobalStyles.jsx";
import {Router} from "react-router-dom";




function App() {
    return (
        
            <>
                    <CssBaseline />
                    <GlobalStyles />
                    <AppRouter/>
            </>
        
    );
}
export default App
