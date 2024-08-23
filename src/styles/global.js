import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  --primary-color: #c6c3c3;
  --second-color: #ffffff;
  --black-color: #000000;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
input,
textarea {
  font-family: "Poppins", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}


a {
    text-decoration: none;
    color: var(--second-color);
  }

  a:hover {
    text-decoration: underline;
  }

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input,
select,
textarea {
  border: none;
  outline: none;
}

::placeholder {
  color: rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  color: inherit;
}

`;
