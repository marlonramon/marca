
//var data = require('./data');

module.exports = function (app) {

    var controller = {};
    var people = getPeople();

    controller.getPeople = function getPeople(req, res, next) {
        res.status(200).send(people);
    }

    controller.getPerson = function getPerson(req, res, next) {
        var id = +req.params.id;

        var person = people.filter(function(p) {
            return p.id === id;
        })[0];

        if (person) {
            res.status(200).send(person);
        } else {
            four0four.send404(req, res, 'person ' + id + ' not found');
        }
    }

    return controller;
}

function getPeople() {
    return [
        {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
        {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
        {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
        {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
        {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
        {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
        {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
        {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
    ];
}