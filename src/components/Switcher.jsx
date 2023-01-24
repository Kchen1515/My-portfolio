import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkTheme";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                // style={{ marginBottom: "2rem", position:'absolute', top:'5px', left:'63.75%'}}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
                moonColor="#1E40AF"
                sunColor="#1E40AF"
            />
        </>
    );
}