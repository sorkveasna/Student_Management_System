Meteor.publish('studentStatus', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.studentStatus.find({_id: id});
    return data;
});

Meteor.publish('studentStatuss', function () {
    return Collection.studentStatus.find();
});
