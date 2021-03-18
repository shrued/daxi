// #282a34 - Dark grey
// #404353 - Light grey
// #cf93c8 - Pink/Lilac
// #996d94 - Dark Pink/Lilac

// #181818 - Dark
// #555 - Grey
// #add8e6 - lblue

// #8a4f65 - Darker
// #c8a2c8 - Lilac

// #ff4451 - angry
// #fcbb00 - optimistic
// #fb6f31 - happy
// #6ada54 - peaceful
// #c900e7 - excited
// #a5a5a5 - bored
// #27b4d6 - sad
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  color: #181818;
  font-size: 16px;
}`;
