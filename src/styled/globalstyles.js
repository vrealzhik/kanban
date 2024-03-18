import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

.rdp {
  color: #94A6BE;
  --rdp-caption-font-size: 14px; 
  --rdp-cell-size: 26px;

  --rdp-accent-color: #94A6BE;
  font-size: 10px;
}

.rdp-day_today:not(.rdp-day_outside) {
  --rdp-selected-color: #fff;
}

.rdp-day_outside {
  color: #94A6BE;
}

.rdp-caption {
  color: #94A6BE;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  transition: all 0.25s linear;
}

`;
