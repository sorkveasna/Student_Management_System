//###############-index-####################
//onCreated
//onRendered
Template.studentStatus.onRendered(function () {
    // Create new  alertify
    createNewAlertify('studentStatus');
});
//events
Template.studentStatus.events({
    'click #js-insert': function (error, result) {
        alertify.studentStatus(renderTemplate(Template.studentStatusInsert))
            .set({
                title: fa('plus', ' Student Status')
            })
            .maximize();
    },
    'click .show': function (e, t) {
   alertify.studentStatus(fa("eye", "Student Status"), renderTemplate(Template.showStudentStatus,
     this));
    }
});

//-----------------------insert--------------------------
//onCreated
Template.studentStatusInsert.onCreated(function () {
    this.subscribe('students');
    this.subscribe('registers');
    this.subscribe('subjects');
});

//helpers
Template.studentStatusInsert.helpers({
    studentId: function () {
        var data = Collection.Student.find();
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({
                label: obj._id + ' | ' + obj.latinName,
                value: obj._id
            })
        });
        return list;
    },

    registerId: function () {
      let studentId = AutoForm.getFieldValue('studentId');
      if(studentId){
        var data = Collection.Register.find({studentId: studentId});
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({
                label: obj._id + ' | ' + obj._subject.name,
                value: obj._id
            })
        });
        return list;
      }
    },
});

//---------------------Update--------------------------------
Template.studentStatusUpdate.helpers({
    studentId: function () {
        var data = Collection.Student.find();
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({
                label: obj._id + ' | ' + obj.latinName,
                value: obj._id
            })
        });
        return list;
    },

    registerId: function () {
      let studentId = AutoForm.getFieldValue('studentId');
      if(studentId){
        var data = Collection.Register.find({studentId: studentId});
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({
                label: obj._id + ' | ' + obj._subject.name,
                value: obj._id
            })
        });
        return list;
      }
    },
});

//Action--------------------------------------------------------------------------------
Template.studentStatusAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.studentStatus', {_id: this._id}, {}, function (error, studentStatus) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                Meteor.subscribe('subjects');
                Meteor.subscribe('registers');
                Meteor.subscribe('students');
                alertify.studentStatus(renderTemplate(Template.studentStatusUpdate, studentStatus))
                    .set({
                        title: fa('edit', ' Student Status')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.studentStatus.remove(self._id);
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
    studentStatusInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    studentStatusUpdate: {
        onSuccess(formType, result) {
            debugger;
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.studentStatus().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
