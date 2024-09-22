import styled from "styled-components";

export const HeaderStyle = styled.header `

align-self: stretch;

h1{
  color: #edc84b;
  text-transform: uppercase;
  text-align: center;
  font-size: 5.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  width: 100%;
  display: block;
}

h1::before,
h1::after {
  display: block;
  content: "";
  height: 3px;
  width: 4rem;
  background-color: #edc84b;
  position: absolute;
  top: calc(50% - 1px);
}

h1::before {
  left: 0;
}

h1::after {
  right: 0;
}

`