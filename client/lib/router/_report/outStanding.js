rabbitRoutes.route('/outStandingRpt', {
    name: "outStandingRpt",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Report'])) {
            BlazeLayout.render('mainLayout', {
                content: "outStandingRpt"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "OutStanding Report",
        parent: "home"
    }
});

rabbitRoutes.route('/outStandingRptGen', {
    name: "outStandingRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {
            content: "outStandingRptGen"
        });
    }
});
