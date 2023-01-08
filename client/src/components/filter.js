import "./product/products.css";

export const Filter = ({ title, options }) => (
  <section class="filter">
    <h1 class="filter-title">{title}</h1>
    <ul class="filter-options">
      {options.map((option) => (
        <li class="option" onClick={() => console.log(`${option} clicked!`)}>
          {option}
        </li>
      ))}
    </ul>
  </section>
);
