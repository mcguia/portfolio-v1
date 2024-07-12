import { createGlobalStyle } from "styled-components"
import theme from "./theme"
import media from "./media"
import * as fontFamilies from "./fonts"
const { colors, fonts, fontSizes } = theme

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskLightWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskLightWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskLightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskLightItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskLightItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskLightItalicTTF}) format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskRegularWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskRegularWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskRegularTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskRegularItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskRegularItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskRegularItalicTTF}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskMediumWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskMediumWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskMediumItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskMediumItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskMediumItalicTTF}) format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskBoldWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskBoldWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'HK Grotesk';
        src: url(${fontFamilies.HKGroteskBoldItalicWOFF2}) format('woff2'),
        url(${fontFamilies.HKGroteskBoldItalicWOFF}) format('woff'),
        url(${fontFamilies.HKGroteskBoldItalicTTF}) format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoRegularWOFF2}) format('woff2'),
        url(${fontFamilies.LatoRegularWOFF}) format('woff'),
        url(${fontFamilies.LatoRegularTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoRegularItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoRegularItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoRegularItalicTTF}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoMediumWOFF2}) format('woff2'),
        url(${fontFamilies.LatoMediumWOFF}) format('woff'),
        url(${fontFamilies.LatoMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoMediumItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoMediumItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoMediumItalicTTF}) format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoSemiboldWOFF2}) format('woff2'),
        url(${fontFamilies.LatoSemiboldWOFF}) format('woff'),
        url(${fontFamilies.LatoSemiboldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Lato';
        src: url(${fontFamilies.LatoSemiboldItalicWOFF2}) format('woff2'),
        url(${fontFamilies.LatoSemiboldItalicWOFF}) format('woff'),
        url(${fontFamilies.LatoSemiboldItalicTTF}) format('truetype');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Apercu Regular';
        src: url(${fontFamilies.ApercuRegularOTF}) format('opentype');
        font-weight: regular;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Apercu Mono';
        src: url(${fontFamilies.ApercuMonoProLightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Apercu Mono';
        src: url(${fontFamilies.ApercuMonoProRegularTTF}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Apercu Mono';
        src: url(${fontFamilies.ApercuMonoProMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Apercu Mono';
        src: url(${fontFamilies.ApercuMonoProBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        overflow-y: scroll;
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
        color: ${colors.darkGrey};
        line-height: 1.8;
        overflow: hidden;

        font-size: ${fontSizes.sm};
        @media ${media.lg} {
            font-size: ${fontSizes.sm};
        }
        @media ${media.xl} {
            font-size: ${fontSizes.md};
        }
    }

    .main-overlay {
        background-color:hsla(26,39%,95%,1);
        background-image:
        radial-gradient(at 5% 96%, hsla(144,100%,92%,0.3) 0px, transparent 50%),
        radial-gradient(at 45% 11%, hsla(36,100%,50%,0.1) 0px, transparent 50%),
        radial-gradient(at 96% 4%, hsla(130,65%,86%,0.31) 0px, transparent 50%),
        radial-gradient(at 87% 84%, hsla(21,100%,79%,0.1) 0px, transparent 50%),
        radial-gradient(at 7% 13%, hsla(352,100%,79%,0.1) 0px, transparent 50%);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }

    a {
        text-decoration: none;
        color: inherit;
        position: relative;
        cursor: pointer;
    }

    a.link__highlight:before,
    a.link__underline:before {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        transform-origin: bottom left;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
    }

    a.link__underline:before {
        height: 2px;
        top: calc(50% + 0.69em);
        background-color: ${colors.lightGrey};
    }

    a.link__highlight:before {
        z-index: -1;
        height: 100%;
        top: 0;
        background-color: ${colors.yellow};
    }

    a.link__highlight:hover:before,
    a.link__underline:hover:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    a.link__underline:hover,
    a.link__underline:focus,
    a.link__underline-active  {
        color: ${colors.darkGrey};
    }

    a.link__underline-active:before {
        transform: scaleX(1);
    }

    ::selection {
        background-color: #fff;
        color: ${colors.yellow};
        text-shadow: none;
    }

    ul, ol {
        p {
            margin-block-start: 0!important;
            margin-block-end: 0!important;
        }
    }

    nav ul li a {
        transition: all .2s linear;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 600;
        -webkit-font-smoothing: antialiased;
        font-family: ${fonts.HKGrotesk};
        color: ${colors.darkGrey};
        line-height: 1.3;
    }

    .fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
    }
    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
    }
    .fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
    }
    .fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
    }
    .fade-enter {
        opacity: 0.01;
        transition: opacity 500ms ${theme.easing};
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 500ms ${theme.easing};
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 500ms ${theme.easing};
    }

`

export default GlobalStyle
