Meteor.publish('payment', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Payment.find({
        _id: id
    });
    return data;
});

Meteor.publish('payments', function () {
    return Collection.Payment.find();
});
