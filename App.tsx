import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Teams } from './src/screens/teams';
import { myTheme } from './src/styles/theme/theme';
import { ThemeProvider } from './src/styles/theme/styled-components';
import { AppContainer } from './src/components/container';


export default function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <StatusBar style="auto" />
            <Teams />
        </ThemeProvider>
    );
}