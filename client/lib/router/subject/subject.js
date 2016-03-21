rabbitRoutes.route('/subject', {
    name: "subject",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "subject"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Subject",
        parent: "home"
    }
});

// rabbitRoutes.route('/subjectInsert', {
//     name: "subjectInsert",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "subjectInsert"
//         });
//     },
//     breadcrumb: {
//         title: "Insert",
//         parent: "subject"
//     }
// });
//
// rabbitRoutes.route('/subjectUpdate/:id', {
//     name: "subjectUpdate",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "subjectUpdate"
//         });
//     },
//     breadcrumb: {
//         title: "Update",
//         parent: "subject"
//     }
// });
