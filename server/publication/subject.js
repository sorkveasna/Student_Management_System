////--static
Meteor.publish('subject', function (id) {
    // Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Subject.find({_id: id});
    return data;
});

Meteor.publish('subjects', function () {
    return Collection.Subject.find();
});

// Meteor.publish('subjectList', function())
//Meteor.publish('subjects',function(){
//   return Collection.Subject.find();
//});

//--Dynamic
//Meteor.publish('subject' , function(selector){
//    // Waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Subject.find(selector);
//    return data;
//});
