import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html {
font-size: 100%; /*16px*/
height: 100%;
}

body {
  background: white;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
  display: grid;
  place-items: center;
  min-height: 100vh;
}

p {margin: 0;}

h1, h2, h3, h4, h5 {
  margin:0;
  font-weight: 700;
  line-height: 1.3;
}

h1 {

  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

img, picture, svg {
  display: block;
  max-width:100%;
  object-fit: cover
}
a{
  text-decoration: none;
}

`

export default GlobalStyles
