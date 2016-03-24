//onCreated
 Template.subjectListRptGen.onCreated(function (){
     this.subscribe('subjects');
 });
 //onRendered
 //helpers
 Template.subjectListRptGen.helpers({
     data() { //method
         // let option = {sort: {_id: 1}};
         return Collection.Subject.find({}, {sort: {_id: 1}});
         // debugger
         // return  subjects;
     },
     no(index) {
          return index + 1;
     }
 });
