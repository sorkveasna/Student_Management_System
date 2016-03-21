rabbitRoutes.route('/student', {
    name: "student",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Data'])) {
            BlazeLayout.render('mainLayout', {
                content: "student"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Student',
        parent: 'home'
    }
});

// rabbitRoutes.route('/studentInsert', {
//     name: "studentInsert",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "studentInsert"
//         });
//     },
//     breadcrumb: {
//         title: 'Insert',
//         parent: 'student'
//     }
// });
// rabbitRoutes.route('/studentUpdate/:id', {
//     name: "studentUpdate",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "studentUpdate"
//         });
//     },
//     breadcrumb: {
//         title: 'Update',
//         parent: 'student'
//     }
// });
