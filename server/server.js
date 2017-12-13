var mongoose = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then(todoSaveSuccess, todoSaveError);

var otherTodo = new Todo({
    text: 'Play',
    completed: false,
    completedAt: 123
});

otherTodo.save().then(todoSaveSuccess, todoSaveError);



function todoSaveSuccess(doc) {
    console.log(JSON.stringify(doc, undefined, 2))
}

function todoSaveError(e) {
    console.log('Unable to save todo', e)
}