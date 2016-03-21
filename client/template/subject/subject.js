//###############-index-####################
//onCreated
// Template.subject.onCreated(function () {
//     SEO.set({
//         title: 'Subject',
//         description: 'Description for this page'
//     });
// });
//onRendered
Template.subject.onRendered(function () {
    // Create new  alertify
    createNewAlertify('subject'); //subject is name of alertify

});
//helpers
//events
Template.subject.events({
    'click #js-insert': function (error, result) {

        alertify.subject(renderTemplate(Template.subjectInsert))
            .set({
                title: fa('plus', ' Subject')
            })
            .maximize();
    }
});

//###############-insert-####################
//onCreated
//onRendered
//helpers
//events

//###############-update-####################
//onCreated
// Template.subjectUpdate.onCreated(function () {
//     let subjectId = FlowRouter.getParam('id');
//     this.subscribe('subject', subjectId);
// });
//onRendered
//helpers
// Template.subjectUpdate.helpers({
//     subjectDoc() {
//         let subjectId = FlowRouter.getParam('id');
//         let subject = Collection.Subject.findOne(subjectId); //{}
//         return subject;
//     }
// });
//events


//Action----------------------------------------------------------------------
Template.subjectAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Subject', {_id: this._id}, {}, function (error, subject) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.subject(renderTemplate(Template.subjectUpdate, subject))
                    .set({
                        title: fa('edit', ' Subject')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Subject.remove(self._id);
                Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
        //     .set({
        //     title: fa('trash', ' លុបមុខវិជ្ជាហ្នឹងមែន?')
        // });
    }
});

//hooks----------------------------------------------------------------------------------
AutoForm.hooks({
    subjectInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    subjectUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.subject().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
