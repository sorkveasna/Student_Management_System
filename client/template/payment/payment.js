//############-index-###########################
//onCreated
//onRendered
Template.payment.onRendered(function () {
    // Create new  alertify
    createNewAlertify('payment');
});
//helpers
//events
Template.payment.events({
    'click #js-insert': function (error, result) {

        alertify.payment(renderTemplate(Template.paymentInsert))
            .set({
                title: fa('plus', ' Payment')
            })
            .maximize();
    }
});

//############-insert-###########################
//onCreated
Template.paymentInsert.onCreated(function () {
    this.subscribe('registers');
    this.subscribe('students');
    this.subscribe('subjects');
});

//onRendered
//helpers
Template.paymentInsert.helpers({
    studentId: function () {
        let list = [{label: '(Select One)', value: ''}];
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName, value: obj._id});
            });
        return list
    },
    registerId: function () {
        let studentId = AutoForm.getFieldValue('studentId');
        if (!_.isUndefined(studentId)) {
            var data = Collection.Register.find({'studentId': studentId});
            var list = [{label: '(Select One)', value: ''}];

            data.forEach(function (obj) {
                let subject = Collection.Subject.findOne(obj.subjectId);
                // Check last paid
                let lastPaid = Collection.Payment.findOne(
                    {registerId: obj._id},
                    {sort: {_id: -1}}
                );
                if (lastPaid) {
                    // var osAmount = math.round(math.lastPaid.osAmount, 2);
                    if (lastPaid.osAmount > 0) {
                        list.push({
                            label: obj._id + ' | ' + subject.name + ' | ' + lastPaid.osAmount,
                            value: obj._id
                        });
                    }
                }
                else {
                    list.push({
                        label: obj._id + ' | ' + subject.name + ' | ' + obj.amount,
                        value: obj._id
                    });
                    //list.push({label: `${obj._id} | ${subject.name} ${obj.amount}`, value: obj._id});
                }
            });
            return list;
        }
        return [{label: '(Select One)', value: ''}];
    },
    dueAmount: function () {
        let dueAmount = 0;
        let registerId = AutoForm.getFieldValue('registerId');
        if (!_.isUndefined(registerId)) {
            let data = Collection.Register.findOne(registerId);
            if (data) {
                dueAmount = data.amount;
                //check last paid
                let lastPaid = Collection.Payment.findOne(
                    {registerId: registerId},
                    {sort: {_id: -1}}
                );
                if (lastPaid) {
                    dueAmount = lastPaid.osAmount;
                    return dueAmount;
                }
                return data.amount;
            }
        }
        return dueAmount;
    }
});

//events
Template.paymentInsert.events({
    'keyup #paid-amount': function () {
        let dueAmount = $('#due-amount').val();
        let paidAmount = $('#paid-amount').val();
        $("#os-amount").val(dueAmount - paidAmount);
    }
});

//############-update-###########################
//onCreated
Template.paymentUpdate.onCreated(function () {
    this.subscribe('payments');
    this.subscribe('registers');
    this.subscribe('students');
    this.subscribe('subjects');
});
//onRendered
Template.paymentUpdate.onRendered(function () {
    // $("#paid-date").val(moment(this.data.paidDate).format('MMM/DD/YYYY'));
    // $("#student-id").val(this.data.studentId + ' | ' + this.data._student.latinName);
    // $("#register-id").val(this.data.registerId);
    $("#due-amount").val(this.data.dueAmount);
    $("#voucherId").val(this.data.voucherId);
});

//helpers
Template.paymentUpdate.helpers({
    studentId: function () {
        var self = this;
        let payment = Collection.Payment.findOne(self._id);
        return [{label: payment.studentId + ' | ' + payment._student.latinName, value: payment.studentId}]
    },
    registerId: function () {
        var self = this;
        let payment = Collection.Payment.findOne(self._id);
        let register = Collection.Register.findOne({_id:payment._id});
        // debugger
        return [{label: payment.registerId + ' | ' + register._subject.name, value: payment.registerId}]
    }
});
//events
Template.paymentUpdate.events({
    'keyup #paid-amount': function () {
        let dueAmount = $('#due-amount').val();
        let paidAmount = $('#paid-amount').val();
        $("#os-amount").val(dueAmount - paidAmount);
    }
});


//Action---------------------------------------------------------------------------------------------
Template.paymentAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Payment', {_id: this._id}, {}, function (error, payment) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                Meteor.subscribe('payments');
                Meteor.subscribe('registers');
                Meteor.subscribe('students');
                Meteor.subscribe('subjects');
                alertify.payment(renderTemplate(Template.paymentUpdate, payment))
                    .set({
                        title: fa('edit', ' Payment')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;

        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Payment.remove({_id: self._id});
                Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
    }
});

//hooks---------------------------------------------------------------------------------------
AutoForm.hooks({
    paymentInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
            // $('#student-id').select2('val', '');

        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    paymentUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.payment().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
