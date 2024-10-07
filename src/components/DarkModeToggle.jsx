import React from "react";

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <div className="dark-mode-switch">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
            </label>
            <span>Dark Mode</span>
        </div>
    );
}

export default DarkModeToggle;
