import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import * as fontFamilies from './fonts';
const { fonts } = theme;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskLightWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskLightWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskLightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskLightItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskLightItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskLightItalicTTF}) format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskRegularWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskRegularWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskRegularTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskRegularItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskRegularItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskRegularItalicTTF}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskMediumWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskMediumWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskMediumItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskMediumItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskMediumItalicTTF}) format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskBoldWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskBoldWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskBoldItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskBoldItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskBoldItalicTTF}) format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoRegularWOFF2}) format('woff2'),
        url(${fontFamilies.LatoRegularWOFF}) format('woff'),
        url(${fontFamilies.LatoRegularTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoRegularItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoRegularItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoRegularItalicTTF}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoMediumWOFF2}) format('woff2'),
        url(${fontFamilies.LatoMediumWOFF}) format('woff'),
        url(${fontFamilies.LatoMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoMediumItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoMediumItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoMediumItalicTTF}) format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoSemiboldWOFF2}) format('woff2'),
        url(${fontFamilies.LatoSemiboldWOFF}) format('woff'),
        url(${fontFamilies.LatoSemiboldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoSemiboldItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoSemiboldItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoSemiboldItalicTTF}) format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }
    html {
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        font-family: ${fonts.Lato};
        color: #202020;
        line-height: 2;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 600;
        -webkit-font-smoothing: antialiased;
        font-family: ${fonts.HKGrotesk};
        color: #202020;
    }

`;

export default GlobalStyle;
