import './App.css'
import AppRouter from "./AppRouter.jsx";
import {CssBaseline} from "@mui/material";
import GlobalStyles from "./GlobalStyles.jsx";




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
