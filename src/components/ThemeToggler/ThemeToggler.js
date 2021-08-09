import { div } from 'prelude-ls';
import react from 'react'
import { useState } from 'react';
import { ThemeProvider} from 'styled-components';

function Toggler (){
    const {theme, setTheme} = useState("Light");



const themeToggler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme ("Light");
};


return ( 
    <>
    <ThemeProvider theme={theme === light ? "" : ""}>
        <div className="App"></div>
    </ThemeProvider>
    </>


);
}



export default Toggler;