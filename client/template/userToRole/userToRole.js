//################-index-###################
//onCreated
//onRendered
Template.userToRole.onRendered(function () {
    // Create new  alertify
    createNewAlertify('userToRole');
});
//helpers
Template.userToRole.helpers({
    selector(){
        if (!Roles.userIsInRole(Meteor.userId(), ['super'])) {
            return {roles: {$nin: ['super']}}; //$nin = not in
        }
        return {};
    }
});
//events
Template.userToRole.events({
    'click #js-insert': function (error, result) {

        alertify.userToRole(renderTemplate(Template.userToRoleInsert))
            .set({
                title: fa('plus', ' User To Role')
            })
            .maximize();
    }
});

//################-insert-###################
//onCreated
//onRendered
//helpers
//events

//################-update-###################
//onCreated
// Template.userToRoleUpdate.onCreated(function () {
//     let userId = FlowRouter.getParam('id');
//     this.subscribe('user', userId);
// });
//onRendered
//helpers
// Template.userToRoleUpdate.helpers({
//     userDoc() {
//         let userId = FlowRouter.getParam('id');
//         let user = Meteor.users.findOne({_id: userId}); //{}
//         return user;
//     }
// });
//events

//Action-----------------------------------------------------------------------------------------
Template.userToRoleAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Meteor.users', {_id: this._id}, {}, function (error, userToRole) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                // Meteor.subscribe('user');
                alertify.userToRole(renderTemplate(Template.userToRoleUpdate, userToRole))
                    .set({
                        title: fa('edit', ' User To Role')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Meteor.call('userToRole.remove', self._id, function (error, result) {
                    if (!error) {
                        self.done();
                        Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
                    }
                    else {
                        Bert.alert(error.message, 'danger', 'growl-bottom-right');
                    }
                });
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
    }
});



// hook------------------------------------------------------------------------------
AutoForm.hooks({
    userToRoleInsert: { //id autoform
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.insert', insertDoc);
            this.done();
        },
        onSuccess(onSubmit, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');

        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },

    userToRoleUpdate: { //id autoform
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            let self = this;
            Meteor.call('userToRole.update', updateDoc, function (error, result) {
                if (!error) {
                    self.done();
                }
            });

        },
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            // FlowRouter.go('userToRole');
            alertify.userToRole().close();

        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
