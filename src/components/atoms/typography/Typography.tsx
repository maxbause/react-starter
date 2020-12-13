import styled, { css } from "styled-components"

type Props = {
  appearance: "title" | "text"
}

const titleStyle = css`
  font-weight: 400;
  font-size: 2rem;
`

const textStyle = css`
  font-weight: 500;
  font-size: 1.2rem;
`

const Typography = styled.div<Props>`
  ${(props) => {
    switch (props.appearance) {
      case "title":
        return titleStyle
      case "text":
        return textStyle
    }
  }}
`

export default Typography
