import { createGlobalStyle, css, ThemeProps } from "styled-components"
import ROBOTO_LIGHT_WOFF from "../../assets/font/Roboto-Light.woff"
import ROBOTO_REGULAR_WOFF from "../../assets/font/Roboto-Medium.woff"
import { Theme } from "./theme"

export const fonts = css`
  @font-face {
    font-family: "Roboto";
    font-weight: 300;
    src: url(${ROBOTO_LIGHT_WOFF}) format("woff");
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 400;
    src: url(${ROBOTO_REGULAR_WOFF}) format("woff");
  }
`

export const globalStyleCSS = css`
  ${fonts};

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    font-family: "Roboto", sans;
    color: ${({ theme }) => theme.font.colors.primary};
    background-color: ${({ theme }) => theme.backgrounds.default};
  }

  body {
    margin: 0 auto;
  }
`

export const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  ${globalStyleCSS};
`
