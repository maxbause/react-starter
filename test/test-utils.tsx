import React from "react"
import "@testing-library/jest-dom"
import { render, RenderOptions, RenderResult } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../src/config/theme"

const AllTheProviders = ({ children }: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
