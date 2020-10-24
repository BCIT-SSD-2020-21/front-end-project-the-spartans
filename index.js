const product = [
    { name: 'Acer Aspire'},
    { name: 'Intel Gaming'},
    { name: 'Acer Aspire XC'},
    { name: 'HP Pavilion PC'},
    { name: 'HP ENVY PC'},
    { name: 'Aspire XC-866'},
    { name: 'Acer Nitro 50'},
    { name: 'Alienware'},
    { name: 'ASUS Strix PC'}

];

const searchInput = document.getElementById('search');

function setList(group) {
    clearList();
    for (const person of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode('person.name');
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResult();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResult() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No Result Found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else {
        return -1;
    }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener('input', (event) => {
   let value = event.target.value;
   if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(product.filter(person => {
            return person.name.includes(value);
        }).sort((productA, productB) => {
            return getRelevancy(productB.name, value) - getRelevancy(productA.name, value);
        }));
   } else {
        clearList();
   }
});