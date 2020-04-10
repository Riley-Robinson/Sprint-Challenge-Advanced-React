import React from "react";
import useDarkMode from "./Hooks/useDarkMode";

        const Header = () => {
            const [darkMode, setDarkMode] = useDarkMode(false)
            const toggleMode = e => {
                e.preventDefault();
                setDarkMode(!darkMode);
            };
            return(
                <header className="header">
                    <h1>We Da Champions My Friend</h1>
                    <div className="darkModeToggle">
                        <div
                            onClick={toggleMode}
                            className={darkMode === 'dark' ? 'toggle toggled' : 'toggle'}
                        />
                    </div>
                </header>
            );
        };
export default Header;