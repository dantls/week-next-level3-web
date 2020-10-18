import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    color: #FFF;
    background-color: #ebf2f5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button , textarea{
    font: 600 18px 'Nunito', sans-serif;
  }
  button: {
    cursor: pointer;
  }

  

  :root {
  --primary: #fedc22;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5;
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

`;