export default function Nav({ pokemons, setPoke }) {
  function handleClick(event) {
    setPoke(event.target.textContent);
  }
  return (
    <div>
      <ul>
        {pokemons.map((name) => (
          <li key={name} onClick={handleClick}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
