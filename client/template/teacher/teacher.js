//################-index-#####################
//onCreated
//onRendered
Template.teacher.onRendered(function () {
    // Create new  alertify
    createNewAlertify('teacher');
});
//helpers
//events
Template.teacher.events({
    'click #js-insert': function (error, result) {
        Meteor.subscribe('subjects');
        alertify.teacher(renderTemplate(Template.teacherInsert))
            .set({
                title: fa('plus', ' Teacher')
            })
            .maximize();
    }
});


//################-insert-#####################
//onCreated
// Template.teacherInsert.onCreated(function () {
//     // this.subscribe('subjects');
// });
//onRendered
//helpers
//events


//################-update-#####################
//onCreated
// Template.teacherUpdate.onCreated(function () {
// let teacherId = FlowRouter.getParam('id');
// this.subscribe('teacher', teacherId);
// this.subscribe('subjects');
// });
//onRendered
//helpers
// Template.teacherUpdate.helpers({
//     teacherDoc() {
//         let teacherId = FlowRouter.getParam('id');
//         let teacher = Collection.Teacher.findOne(teacherId); //{}
//         return teacher;
//     }
// });
//events



//Action---------------------------------------------------------------------------------
Template.teacherAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Teacher', {_id: this._id}, {}, function (error, teacher) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                Meteor.subscribe('subjects');
                alertify.teacher(renderTemplate(Template.teacherUpdate, teacher))
                    .set({
                        title: fa('edit', ' Teacher')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;

        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Teacher.remove(self._id);
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
    teacherInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },

    teacherUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.teacher().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
