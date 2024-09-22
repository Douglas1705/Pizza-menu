import PizzaData from "../data/PizzaData";
import { MenuStyle } from "./menuStyle";

function Menu() {
  const pizzas = PizzaData;

  return (
    <MenuStyle>
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <li
            className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
            key={pizza.id}
          >
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </MenuStyle>
  );
}

export default Menu;
