Meteor.publish('teacher', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Teacher.find({_id: id});
    return data;
});

Meteor.publish('teachers', function () {
    return Collection.Teacher.find();
});
