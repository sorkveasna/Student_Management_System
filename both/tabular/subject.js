TabularTables = {};

TabularTables.Subject = new Tabular.Table({
    name: 'Subject',
    collection: Collection.Subject,
    //responsive: true,
    autowidth: false,
    columnDefs: [{
        'width': '1px',
        'targets': 0
    }],
    columns: [

        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.subjectAction
        },

        {
            data: '_id',
            title: 'ID'
        }, {
            data: 'name',
            title: 'Name'
        }, {
            data: 'duration',
            title: 'Duration'
        }, {
            data: 'price',
            title: 'Price',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },

        {
            data: 'des',
            title: 'Description'
        }

    ]
});
