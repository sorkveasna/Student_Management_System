rabbitRoutes.route('/userToRole', {
    name: "userToRole",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "userToRole"
            });
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "userToRole",
        parent: "home"
    }
});
// rabbitRoutes.route('/userToRoleInsert', {
//     name: "userToRoleInsert",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "userToRoleInsert"
//         });
//     },
//     breadcrumb: {
//         title: "Insert",
//         parent: "userToRole"
//     }
// });
// rabbitRoutes.route('/userToRoleUpdate/:id', {
//     name: "userToRoleUpdate",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "userToRoleUpdate"
//         });
//     },
//     breadcrumb: {
//         title: "Update",
//         parent: "userToRole"
//     }
// });
