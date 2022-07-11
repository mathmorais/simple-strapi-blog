import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:root {
    font-size: 62.5%;

    @media screen and (max-width: 720px) {
      font-size: 55%;
    }


  }
 
  body {
	  text-rendering: optimizeLegibility;
    font-smooth: antialiased;
	}



`;
