Meteor.publish('register', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Register.find({_id: id});
    return data;
});

Meteor.publish('registers', function () {
    return Collection.Register.find();
});
