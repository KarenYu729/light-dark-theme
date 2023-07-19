import React from "react";
// something need to pay attention here
// if you used export default Content, in Content.jsx, do not add {} when import
// if you export Content when defined the function, use {} when import
import Content from './components/Content'
import styled from 'styled-components';
// ------------

import {useDarkMode} from "./styles/useDarkMode";
import Toggle from "./components/Toggle";
// ------------
import {GlobalStyles, lightTheme, darkTheme} from "./styles/globalStyles";
// ------------
import {ThemeProvider} from 'styled-components'

// can write css in styled.div``
const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;


function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <Container>
                <GlobalStyles/>
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
                <Content/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
