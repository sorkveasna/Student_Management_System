////--static
Meteor.publish('user', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Meteor.users.find();
    return data;
});
