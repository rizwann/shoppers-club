import { css, CSSObject } from "styled-components";

// type Props = {
//   width?: string;
//   height?: string;
//   backgroundColor?: string;
//   padding?: string;
//   display?: string;
//   fontSize?: string;
//   justifyContent?: string;
//   marginLeft?: string;
//   flex?: number;
//   flexDirection?: string;
// };

export const mobile = (props: CSSObject) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};
