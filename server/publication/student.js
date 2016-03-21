Meteor.publish('student', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Student.find({_id: id});
    return data;
});

Meteor.publish('students', function () {
    return Collection.Student.find();
});
