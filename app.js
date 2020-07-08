function getSearchTerm(evt) {
  const input = document.querySelector('#search-text');
  const searchTerm = input.value;

  evt.preventDefault();

  if (input.value) {
    getGiphy(searchTerm);
    input.classList.remove('is-invalid')
    input.value = '';
  } else input.classList.add('is-invalid')
}

async function getGiphy(query) {
  try {
    let res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: { api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: query, limit: 1, } });
    displayGiphy(res.data.data[0].images.fixed_height.url);
  }
  catch (err) {
    alert('Oops! Something went wrong!')
    throw new Error(err)
  }
}

function displayGiphy(imgLink) {
  const outputDiv = document.querySelector('#gif-display');
  let gif = document.createElement('img');

  gif.setAttribute('src', imgLink);
  gif.setAttribute('class', 'm-2')

  outputDiv.append(gif);
  
}

document.querySelector('#search-btn').addEventListener('click', (evt) => {
  getSearchTerm(evt);
})