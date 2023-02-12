import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{
  --white-1: rgba(255, 255, 255, 1.0);
  --white-2:rgba(242, 242, 242, 1.0);
  --white-3:rgba(250, 250, 250, 1.0);
  --blue: rgba(81, 117, 255, 1.0);
  --lightBlue: rgba(130,156,255,1.0);
  --black: rgba(37,41,58,1.0);
  --lightBlack: rgba(51,57,80,1.0);
  --grey:rgba(116,123,149,1.0);
  --red: rgba(240,91,91,1.0);
  --padding:0.625rem;
  --margin:0.625rem;
  --borderRadius:0.2px;
  --boxShadow-1: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);
  --boxShadow-2: 0px 2px 15px 2px rgba(0, 0, 0, 0.4);
  --transition-1: all 0.3s ease-in-out;
  --transition-2: all 0.6s ease-in-out;
  --transition-3: all 0.9s ease-in-out;


}

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
  background: var(--white-2);
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

.btn{
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--white-2);
  display: inline-block;

  &.primary{
    background-color:var(--blue);
    color:var(--white-2);
  }


}

`

export default GlobalStyles
