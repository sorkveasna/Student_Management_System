TabularTables = {};

TabularTables.studentStatus = new Tabular.Table({
    name: 'studentStatus',
    collection: Collection.studentStatus,
    autowidth: false,
    columnDefs: [
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.studentStatusAction},

        {data: '_id', title: 'ID'},

        {data: 'statusDate', title: 'Status Date',
          render: function (val, type, doc) {
              if (val instanceof Date) {
                  return moment(val).format('MMM/DD/YYYY');
              } else {
                  return 'Never';
              }
          }
      },

      {data: 'status', title: 'Status'},

      {data: '_student', title: 'Student Name',
            render(val){
                if(!_.isUndefined(val)){
                    return val.latinName;
                }
                return '';
            }
        },
        {data: 'registerId', title: 'Register ID'},
        {data: 'des', title: 'Description'}
      ]
    });
