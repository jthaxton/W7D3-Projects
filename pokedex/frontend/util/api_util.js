
const fetchAllPokemon = () => {
  $.ajax({
    url: './pokemon/',
    method: 'GET'
  });
};

export default fetchAllPokemon;
