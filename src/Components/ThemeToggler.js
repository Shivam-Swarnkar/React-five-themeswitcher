import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    return (
        <div
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");
            }}>
            <h1>Theme toggler</h1>
            <span>
                {themeMode === "light" ? "Switch to dark" : "Switch to light"}
            </span>
        </div>
    );
}

export default ThemeToggler;