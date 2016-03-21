//############-index-##########
//onCreated
//onRendered
//helpers
Template.paymentRptGen.helpers({
    data() { //method
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');
        Meteor.call('paymentRpt', fromDate, toDate, function (error, result) {
            if (!error) {
                Session.set('paymentRptResult', result);
            }
            else {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
        });
        return Session.get('paymentRptResult');
    },

    no(index) {
        return index + 1;
    }

});
//events

//hook---------------------------------------------------------------------
AutoForm.hooks({
    paymentRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc) {
            this.done(null, insertDoc);
        },
        onSuccess(formType, result) {
            let query = result;
            let path = FlowRouter.path('paymentRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
