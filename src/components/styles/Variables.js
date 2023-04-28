import { css } from 'styled-components';

const variables = css`
  :root {
    --bg-color: #1b1b1b;
    --primary-color: #2efce9;
    --white: #ffffff;
    --ds-one: drop-shadow(-5px 5px 3px #000000ab);
    --ds-two: drop-shadow(-10px 10px 15px rgba(0, 0, 0, 0.67));
    --bs-one: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    --bs-two: #d0c6c64d 0px 5px 30px 1px;

    --font-l: 77px;
    --font-m: 70px;
    --font-s: 30px;
    --font-xs: 20px;
    --font-xss: 18px;
    
    --font-fam-one: "Inter", sans-serif;
    --font-fam-two: "Mitr", sans-serif;
    --font-fam-three:  "Source Sans Pro", sans-serif;
    --font-fam-four: "Open Sans", sans-serif;
    --font-fam-five: "Jura", sans-serif;;
    --font-fam-six: "Caveat", cursive;

    --transition: all 500ms ease-in-out;


  }`


export default variables;