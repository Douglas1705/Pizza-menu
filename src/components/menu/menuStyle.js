import styled from "styled-components";

export const MenuStyle = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  h2 {
  display: inline-block;
  padding: 1rem 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
}

  p {
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
}

.pizzas {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
}

.pizza {
  display: flex;
  gap: 3.2rem;
}

.pizza img {
  width: 12rem;
  aspect-ratio: 1;
  align-self: start;
}

.pizza div {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.4rem 0;
}

.pizza h3 {
  font-size: 2rem;
  font-weight: 400;
}

.pizza p {
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: auto;
}

.pizza span {
  display: block;
  font-size: 1.6rem;
}

.pizza.sold-out {
  color: #888;
}

.pizza.sold-out img {
  filter: grayscale();
  opacity: 0.8;
}
`