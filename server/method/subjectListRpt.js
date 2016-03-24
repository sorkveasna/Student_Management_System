Meteor.methods({
     subjectListRpt() {
         let data = Collection.Subject.findOne();
         return data;
     }
});
