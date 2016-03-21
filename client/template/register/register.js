//###############-index-#####################
//onCreated
//onRendered
Template.register.onRendered(function () {
    // Create new  alertify
    createNewAlertify('register');
});
//helpers
//events
Template.register.events({
    'click #js-insert': function (error, result) {

        alertify.register(renderTemplate(Template.registerInsert))
            .set({
                title: fa('plus', ' Register')
            })
            .maximize();
    }
});

//###############-insert-#####################
//onCreated
Template.registerInsert.onCreated(function () {
    this.subscribe('teachers');
    this.subscribe('subjects');
    this.subscribe('students');
});

//onRendered

//helpers
Template.registerInsert.helpers({
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
    subjectId: function () {
        var data = Collection.Subject.find();
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' | ' + obj.name, value: obj._id})
        });
        return list;
    },
    price: function () {
        let subjectId = AutoForm.getFieldValue('subjectId');
        let data = Collection.Subject.findOne(subjectId);
        if (data) {
            return data.price;
        }
        return 0;
    },
    teacherId: function () {
        let subjectId = AutoForm.getFieldValue('subjectId');
        if (!_.isUndefined(subjectId)) {
            let subject = Collection.Subject.findOne(subjectId);
            let arr = [
                subject.name
            ];

            let teacher = Collection.Teacher.find({subjects: {$in: arr}});
            let list = [];
            teacher.forEach(function (obj) {
                list.push({
                    label: obj._id + ' | ' + obj.name, value: obj._id
                })
            });
            return list;
        }
        return [
            {label: '(Select One)', value: ''}
        ];
    }
});
//events
Template.registerInsert.events({
    'keyup #discount': function () {
        let price = $('#price').val();
        let discount = $('#discount').val();
        $("#amount").val(price - discount);
    }
});

//###############-update-#####################
//onCreated
//update onCreated
Template.registerUpdate.onCreated(function () {
    this.subscribe('registers');
    this.subscribe('teachers');
    this.subscribe('subjects');
    this.subscribe('students');
});
//onRendered
Template.registerUpdate.onRendered(function () {
    $("#reg-date").val(moment(this.data.regDate).format('MMM/DD/YYYY'));
    $("#student-id").val(this.data.studentId);
});

//helpers
Template.registerUpdate.helpers({
    // registerDoc(){
    //     return Collection.Register.findOne(this._id);
    // },
    studentId: function () {
        var self = this;
        let register = Collection.Register.findOne(self._id);
        return [
            {label: register.studentId + ' | ' + register._student.latinName , value: register.studentId}
        ];
    },
    subjectId: function () {
        var data = Collection.Subject.find();
        var list = [{label: '(Select One)', value: ''}];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' | ' + obj.name, value: obj._id})
        });
        return list;
    },
    teacherId: function () {
        let subjectId = AutoForm.getFieldValue('subjectId');
        if (!_.isUndefined(subjectId)) {
            let subject = Collection.Subject.findOne(subjectId);
            let arr = [
                subject.name
            ];

            let teacher = Collection.Teacher.find({subjects: {$in: arr}});
            let list = [];
            teacher.forEach(function (obj) {
                list.push({
                    label: obj._id + ' | ' + obj.name, value: obj._id
                })
            });
            return list;
        }
        return [
            {label: '(Select One)', value: ''}
        ];
    }

});

//events
Template.registerInsert.events({
    'keyup #discount': function () {
        let price = $('#price').val();
        let discount = $('#discount').val();
        $("#amount").val(price - discount);
    }
});


//Action---------------------------------------------------------------------------------------------------
Template.registerAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Register', {_id: this._id}, {}, function (error, register) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                Meteor.subscribe('teachers');
                Meteor.subscribe('subjects');
                Meteor.subscribe('students');
                alertify.register(renderTemplate(Template.registerUpdate, register))
                    .set({
                        title: fa('edit', ' Register')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;

        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Register.remove({_id: self._id}); /// remove by _id?
                Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
    }
});


//hooks-------------------------------------------------------------------------------------
AutoForm.hooks({
    registerInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    registerUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            // FlowRouter.go('register');
            alertify.register().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
