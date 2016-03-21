rabbitRoutes.route('/payment', {
    name: "payment",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Data'])) {
            BlazeLayout.render('mainLayout', {
                content: "payment"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Payment",
        parent: "home"
    }
});
// rabbitRoutes.route('/paymentInsert', {
//     name: "paymentInsert",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "paymentInsert"
//         });
//     },
//     breadcrumb: {
//         title: "Insert",
//         parent: "payment"
//     }
// });
//
// rabbitRoutes.route('/paymentUpdate/:id', {
//     name: "paymentUpdate",
//     action: function (params, queryParams) {
//         BlazeLayout.render('mainLayout', {
//             content: "paymentUpdate"
//         });
//     },
//     breadcrumb: {
//         title: "Update",
//         parent: "payment"
//     }
// });
