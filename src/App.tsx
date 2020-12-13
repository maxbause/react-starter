import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Typography } from "./components/atoms/typography"
import { GlobalStyle } from "./config/globalStyle"
import { theme } from "./config/theme"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Typography appearance="title" as="h1">
          React Starter Kit
        </Typography>
        <Typography appearance="text">Almost before we knew it, we had left the ground. </Typography>
      </Container>
    </ThemeProvider>
  )
}
