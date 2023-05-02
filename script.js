const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsSection = document.querySelector('#results');
const API_KEY = "your_API_KEY";
const CX = "your_CX";
const GOOGLE_API_URL = `https://your_GOOGLE_API_URL`;

let currentPage = 1;
let totalPages = 0;

function searchPhotos(query, page) {
  let apiUrl;
  if (page === 1) {
    apiUrl = `${GOOGLE_API_URL}${query}`;
  } else {
    apiUrl = `${GOOGLE_API_URL}${query}&start=${(page - 1) * 10 + 1}`;
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.items) {
        totalPages = Math.ceil(data.searchInformation.totalResults / 10);
        displayResults(data.items);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

function displayResults(results) {
  resultsSection.innerHTML = '';

  results.forEach(result => {
    const img = document.createElement('img');
    img.src = result.link;
    resultsSection.appendChild(img);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  currentPage = 1;
  searchPhotos(searchInput.value, currentPage);
});

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    searchPhotos(searchInput.value, currentPage);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    searchPhotos(searchInput.value, currentPage);
  }
});
