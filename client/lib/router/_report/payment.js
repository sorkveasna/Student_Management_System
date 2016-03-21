rabbitRoutes.route('/paymentRpt', {
    name: "paymentRpt",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "paymentRpt"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Payment Report",
        parent: "home"
    }
});

rabbitRoutes.route('/paymentRptGen', {
    name: "paymentRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {
            content: "paymentRptGen"
        });
    }
});
