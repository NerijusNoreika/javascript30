const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

let bandContainer = document.getElementById('bands');

function checkArticle(band) {
  let articles = ['the', 'a', 'an'];
  let first = band.split(' ')[0].toLowerCase().trim();
  return articles.includes(first);
}

function removeArticle(band) {
  return band.split(' ').slice(1).join(' ');
}

const sortedBands = bands.sort((first, second) => {
  if (checkArticle(first)) {
    first = removeArticle(first);
  }
  if (checkArticle(second)) {
    second = removeArticle(second);
  }
  return first > second ? 1 : -1;
});

sortedBands.forEach(band => {
  bandContainer.innerHTML += `<li>${band}</li>`;
});
