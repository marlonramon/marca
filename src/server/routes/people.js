//var four0four = require('./utils/404')();

module.exports = function (app) {
    
    var controller = app.controllers.people;

    app.route('/api/people').get(controller.getPeople);
    app.route('/api/person/:id').get(controller.getPerson);
    //app.route('/*').get(four0four.notFoundMiddleware);


}


//////////////


