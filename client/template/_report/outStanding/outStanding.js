//############-index-##########
//onCreated
//onRendered
//helpers
Template.outStandingRptGen.helpers({
    data() { //method
        let asAt = FlowRouter.getQueryParam('asAt'); //string
        Meteor.call('outStandingRpt', asAt, function (error, result) {
            if (!error) {
                Session.set('outStandingRptResult', result);
            }
            else {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
        });
        return Session.get('outStandingRptResult');
    },

    no(index) {
        //console.log(index);
        return index + 1;
    }
});
//events

//hook--------------------------------------------------------
AutoForm.hooks({
    outStandingRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc) {
            this.done(null, insertDoc);
        },
        onSuccess(formType, result) {
            let query = result;
            let path = FlowRouter.path('outStandingRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
