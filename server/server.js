var mongoose = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then(todoSaveSuccess, todoSaveError);

var otherTodo = new Todo({
    text: 'Play',
});

otherTodo.save().then(saveSuccess, saveError);





var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'xyz@qer.com',
});

newUser.save().then(saveSuccess, saveError);



function saveSuccess(doc) {
    console.log(JSON.stringify(doc, undefined, 2))
}

function saveError(e) {
    console.log('Unable to save todo', e)
}

