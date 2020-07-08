function getSearchTerm(evt) {
  const input = document.querySelector('#search-text');
  const searchTerm = input.value;

  evt.preventDefault();
  input.value = '';
  getGiphy(searchTerm);
}

async function getGiphy(query) {
  let res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: { api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: query, limit: 1, } });
  console.log(res.data.data[0]);
}



document.querySelector('#search-btn').addEventListener('click', (evt) => {
  getSearchTerm(evt);
})