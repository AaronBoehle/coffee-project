"use strict";

// COFFEE - TABLE CONTENT //

var coffees = [

    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// PUTS COFFEE DATA INTO TABLE WITHIN JS //
function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    // html += '<span>' + coffee.id + '</span>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// CONVERTS ABOVE TABLE DATA INTO STRINGS //
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// "EXPORTS" DATA INTO TABLE OF HTML //
var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);

// FORM & SUBMIT SECTION //
var roastSelection = document.querySelector('#roast-selection');

var searchBox = document.querySelector('#searchBox');

function searchCoffees (input) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    input = searchBox.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffees.name.indexOf(input) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);
searchBox.addEventListener('keypress', searchCoffees);






