rabbitRoutes = FlowRouter.group({
    prefix: '/rabbit',
    triggersEnter: [function (context, redirect) {
        if (!Meteor.userId()) {
            console.log('no id');
            FlowRouter.go('home');
        }
    }]
});
