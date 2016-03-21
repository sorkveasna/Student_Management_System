rabbitRoutes.route('/teacher', {
    name: "teacher",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "teacher"
            });
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Teacher",
        parent: "home"
    }
});


// rabbitRoutes.route('/teacherInsert', {
//     name: "teacherInsert",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "teacherInsert"
//         });
//     },
//     breadcrumb: {
//         title: "Insert",
//         parent: "teacher"
//     }
// });
//
// rabbitRoutes.route('/teacherUpdate/:id', {
//     name: "teacherUpdate",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "teacherUpdate"
//         });
//     },
//     breadcrumb: {
//         title: "Update",
//         parent: "teacher"
//     }
// });
