import { css } from "styled-components";

export const Hovers = {
  hover01: css`
    &:hover {
      background-color: #33399b;
    }
  `,
    hover02: css`
    &:hover {
      color: #33399b;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
  `,
    hover03: css`
    &:hover {
      background-color: #33399b;
      color: #fff;
    }
  `,
};