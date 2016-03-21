TabularTables = {};

TabularTables.Student = new Tabular.Table({
    name: 'Student',
    collection: Collection.Student,
    // autowidth: true,
    columnDefs: [
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.studentAction
        },
        {
            data: '_id',
            title: 'ID'
        },
        {
            data: 'khmerName',
            title: 'Khmer Name'
        },
        {
            data: 'latinName',
            title: 'Latin Name'
        },
        {
            data: 'gender',
            title: 'Gender'
        },
        {
            data: 'dob',
            title: 'Date Of Birth',
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('MMM/DD/YYYY');
                } else {
                    return 'Never';
                }
            }
        },
        {
            data: 'telephone',
            title: 'Telephone'
        },
        {
            data: 'maritalStatus',
            title: 'Marital Status'
        },
        {
            data: 'email',
            title: 'Email'
        },
        {
            data: 'currentAddress',
            title: 'Current Address',
            render(val){
                if (!_.isUndefined(val)) {
                    return val.houseNumber + ',' +
                        val.group + ', ' +
                        val.village + ', ' +
                        val.commune + ', ' +
                        val.district + ', ' +
                        val.province;
                }
                return '';
            }
        },
        {
            data: 'emergencyContact',
            title: 'Emergency Contact',
            render(val){
                if (!_.isUndefined(val)) {
                    return val.name + ', ' +
                        val.gender + ', ' +
                        val.relation + ', ' +
                        val.telephone + ', ' +
                        val.email;
                }
                return '';
            }
        }

    ]
});
