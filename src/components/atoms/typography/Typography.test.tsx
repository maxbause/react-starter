import React from "react"
import { screen } from "@testing-library/dom"
import Typography from "./Typography"
import { render } from "../../../../test/test-utils"

describe("App -> components -> atoms -> <Typography />", () => {
  test("to render successfully", () => {
    render(<Typography appearance="title">Test title</Typography>)
    expect(screen.getByText("Test title")).toBeVisible()

    render(<Typography appearance="text">Test text</Typography>)
    expect(screen.getByText("Test text")).toBeVisible()
  })
})
