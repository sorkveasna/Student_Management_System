FlowRouter.triggers.enter([
    function (context, redirect) {
        if (!Meteor.userId()) {
            FlowRouter.go('home');
        }
    }
], {
    except: ['home']
});
