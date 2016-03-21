TabularTables = {};

TabularTables.Payment = new Tabular.Table({
    name: 'Payment',
    collection: Collection.Payment,
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
            tmpl: Meteor.isClient && Template.paymentAction
        },
        {
            data: '_id', title: 'ID'
        },
        {
            data: 'paidDate',
            title: 'Paid Date',
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
            data: 'registerId',
            title: 'Register ID'
        },
        {
            data: 'dueAmount',
            title: 'Due Amount',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: 'paidAmount',
            title: 'Paid Amount',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: 'osAmount',
            title: 'OS Amount',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: 'voucherId',
            title: 'Voucher ID'
        }
    ]
});
