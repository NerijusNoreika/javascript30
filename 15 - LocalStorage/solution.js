
let storage = localStorage;
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(storage.getItem('items')) || [];

window.addEventListener('load', function(e) {
    populateList(items, itemsList);
});

window.addEventListener('beforeunload', function() {
    storage.setItem('items', JSON.stringify(items));
});

itemsList.addEventListener('input', handleCheckboxes);
addItems.addEventListener('submit', addItem);


function handleCheckboxes(e) {
    if (e.type === 'input') {
        let target = e.target;
        for (let [i, item] of items.entries()) {
            if (parseInt(target.dataset.id) === i) {
                item.checked = !item.checked;
            }
        }
    }
   
}
function addItem(e) {
    e.preventDefault();
    const input = this.querySelector('input[name="item"]');
    const inputvalue = input.value;
    const item = {
        text: inputvalue,
        checked: false,
    };
    items.push(item);
    populateList(items, itemsList);
}

function populateList(items, list) {
    if (items.length <= 0) return;
    list.innerHTML = items.map((item, i) => {
        let bool = item.checked === true ?  'checked' : '';
        return `
            <li>
                <input ${bool} type="checkbox" data-id="${i}" id="item-${i}">
                <label for="item-${i}">${item.text}</label>
            </li>
        `
    }).join('');
}

