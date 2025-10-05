import React from "react";
import { AppRouter } from "./Router";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    )
}

export default App;
