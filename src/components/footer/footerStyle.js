import styled from "styled-components";

export const FooterStyle = styled.footer `
font-size: 1.4rem;

.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
}

.btn {
  color: inherit;
  font-family: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #edc84b;
  padding: 1.4rem 3.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #e9bb24;
}

`