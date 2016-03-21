Meteor.startup(function () {
    //create user
    if (Meteor.users.find().count() <= 0) {
        let superId = Accounts.createUser({
            username: 'super',
            email: 'super@rabbit.com',
            password: 'super123'
            // approved: true
        });
        Roles.addUsersToRoles(superId, ['Data', 'Report', 'Setting', 'super']);
    }
});