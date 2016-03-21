TabularTables = {};

TabularTables.userToRole = new Tabular.Table({
    name: 'userToRole',
    collection: Meteor.users,
    autowidth: false,
    columnDefs: [
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.userToRoleAction
        },
        {
            data: '_id',
            title: 'ID'
        },
        {
            data: 'username',
            title: 'User Name'
        },
        // {
        //     data: 'emails',
        //     title: 'UserId',
        //     render: function(val, type, doc) {
        //         let address = '';
        //         val.forEach(function(email) {
        //             address = email.address;
        //         });
        //         return address;
        //     }
        // }
        {
            data: 'roles',
            title: 'Roles'
        }
    ]
});
