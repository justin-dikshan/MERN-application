module.exports = (app) => {
    const users_view = require('../controller/users.view');

    // login for users
    app.post('/login' , users_view.login);

    // Create a new user
    app.post('/api/users', users_view.create);
    
    // Gets all users
    app.get('/api/users', users_view.finallUsers);

    // Gets detail view
    app.get('/api/users/:userId', users_view.detailView);

    //Update an user
    app.put('/api/users/:userId', users_view.updateUser);

    //Delete a user
    app.delete('/api/users/:userId', users_view.deleteUser);
}