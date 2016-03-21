//###############-index-####################
//onCreated
//onRendered
Template.student.onRendered(function () {
    // Create new  alertify
    createNewAlertify('student');
});
//helpers
//events
Template.student.events({
    'click #js-insert': function (error, result) {
        alertify.student(renderTemplate(Template.studentInsert))
            .set({
                title: fa('plus', ' Student')
            })
            .maximize();
    },
    'click .show': function (e, t) {
   alertify.student(fa("eye", "Branch"), renderTemplate(Template.showStudent,
     this));
 }
});

//###############-insert-####################
//onCreated
//onRendered
//helpers
//events

// ###############-update-####################
//onCreated
// Template.studentUpdate.onCreated(function () {
//     let studentId = FlowRouter.getParam('id');
//     this.subscribe('student', studentId);
// });
//onRendered
//helpers
// Template.studentUpdate.helpers({
//     studentDoc() {
//         let studentId = FlowRouter.getParam('id');
//         let student = Collection.Student.findOne(studentId); //{}
//         //console.log(student);
//         return student;
//     }
// });
//events



//Action--------------------------------------------------------------------------------
Template.studentAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Student', {_id: this._id}, {}, function (error, student) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            } else {
                alertify.student(renderTemplate(Template.studentUpdate, student))
                    .set({
                        title: fa('edit', ' Student')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Student.remove(self._id);
                Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
    }
});



//hooks---------------------------------------------------------------------------
AutoForm.hooks({
    studentInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    studentUpdate: {
        onSuccess(formType, result) {
            debugger;
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.student().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
