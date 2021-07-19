import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            darker: string;
            dark: string;
            white: string;
            gray: string;
            darkGray: string;
            blue: string;
            darkLight: string;
        };
    }
}
