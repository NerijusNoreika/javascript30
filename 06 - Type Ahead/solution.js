
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// search input 
let allData = null;

let search = document.querySelector('#search');
let suggestions = document.querySelector('.suggestions');

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
         allData = data;
}).catch(error => {
    console.error(error);
})

function findData(data, val) {
    let [city, state] = data;

    if (city.toLowerCase().indexOf(val.toLowerCase()) !== -1 || 
            state.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                return true;
    }

    return false;

}
function convertSearch(data, val) {
    if (data.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
        let index =  data.indexOf(val);
        let lastIndex = val.length;

        return data.substring(0, index) + '<span class="search-highlight">' + data.substring(index, lastIndex) +'</span>' + data.substring(lastIndex);
    }
    return data;
}
function getView(data, val) {
        let {city, state, population} = data;
        let formatter = new Intl.NumberFormat();

        population = formatter.format(population);

        if (findData([city, state], val)) {
           
           city = convertSearch(city, val);
           state = convertSearch(state, val);
           
            return `
                <li>
                    <div>${city}, ${state}</div>
                    <div>${population}</div>
                </li>
            `;
        } else {
            return false;
        }
    }


search.addEventListener('input', function(e) {
    let val = this.value;
    suggestions.innerHTML = '';
    if (val.length <= 2) {
        suggestions.innerHTML += `<li>No results</li>`;
        return;
    }

    allData.forEach(data => {
        let view = getView(data, val);
        if (view) {
            suggestions.innerHTML += view;
        }
    });
    let length = document.querySelector('.suggestions').childElementCount;
    if (length === 0) {
        suggestions.innerHTML += `<li>No results</li>`;
    }
});

