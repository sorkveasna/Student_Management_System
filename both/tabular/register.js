TabularTables = {};

TabularTables.Register = new Tabular.Table({
    name: 'Register',
    collection: Collection.Register,
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
            tmpl: Meteor.isClient && Template.registerAction
        },
        {
            data: '_id',
            title: 'ID'
        },
        {
            data: 'regDate',
            title: 'Register Date',
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('MMM/DD/YYYY');
                } else {
                    return 'Never';
                }
            }
        },
        {
            data: '_student',
            title: 'Student Name',
            render(val){
                if(!_.isUndefined(val)){
                    return val.latinName;
                }
                return '';
            }
        },
        {
            data: 'studyDay',
            title: 'Study Day'
        },
        {
            data: 'studyTime',
            title: 'Study Time'
        },
        {
            data: '_subject',
            title: 'Subject Name',
            render(val){
                if(!_.isUndefined(val)){
                    return val.name;
                }
                return '';
            }
        },
        {
            data: 'price',
            title: 'Price',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: 'discount',
            title: 'Discount',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: 'amount',
            title: 'Amount',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: '_teacher',
            title: 'Teacher Name',
            render(val){
                if(!_.isUndefined(val)){
                    return val.name;
                }
                return '';
            }
        },
        {
            data: 'studentStatus',
            title: 'Student Status'
        },
        {
            data: 'informedBy',
            title: 'Informed By'
        }
    ]

});
