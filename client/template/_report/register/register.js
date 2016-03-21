//##############-index-############
//onCreated
//onRendered
//helpers
Template.registerRptGen.helpers({
    data() { //method
        let fromDate = FlowRouter.getQueryParam('fromDate'); //string
        let toDate = FlowRouter.getQueryParam('toDate');
        Meteor.call('registerRpt', fromDate, toDate, function (error, result) {
            if (!error) {
                Session.set('registerRptResult', result);
            }
            else {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
        });
        return Session.get('registerRptResult');
    },

    no(index) {
        //console.log(index);
        return index + 1;
    }
});
//events

//hook------------------------------------------------
AutoForm.hooks({
    registerRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc) {
            this.done(null, insertDoc);
            return false;
        },
        onSuccess(formType, result) {
            let query = result;
            let path = FlowRouter.path('registerRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
