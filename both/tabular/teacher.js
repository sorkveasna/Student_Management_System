TabularTables = {};

TabularTables.Teacher = new Tabular.Table({
    name: 'Teacher',
    collection: Collection.Teacher,
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
            tmpl: Meteor.isClient && Template.teacherAction
        },
        {
            data: '_id',
            title: 'ID'
        },
        {
            data: 'name',
            title: 'Name'
        },
        {
            data: 'gender',
            title: 'Gender'
        },
        {
            data: 'telephone',
            title: 'Telephone'
        },
        {
            data: 'subjects',
            title: 'Subject Name'
        }

    ]
});
