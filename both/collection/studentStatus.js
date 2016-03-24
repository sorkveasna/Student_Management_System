Collection.studentStatus = new Mongo.Collection('studentStatus');
Schema.studentStatus = new SimpleSchema({
    statusDate: {
      type: Date,
      label: 'Status Date',
      autoform: {
          type: 'bootstrap-datetimepicker',
          afFieldInput: {
              dateTimePickerOptions: {
                  format: 'MMM/DD/YYYY',
                  pickTime: false
              }
          }
      }
  },
    status: {
      type: String,
      label: 'Status',
      autoform: {
          type: 'select2',
          options() {
              return [
                  {label: '(Select One)', value: ''},
                  {label: 'Active', value: 'Active'},
                  {label: 'Subspend', value: 'Subspend'},
                  {label: 'Close', value: 'Close'}
                  {label: 'Cancel', value: 'Cancel'}
              ]
          }
      }
  },
    des: {
      type: String,
      label: 'Description',
      autoform: {
          afFieldInput: {
              type: 'summernote',

              // toolbar: [
              //     ['height', ['300']]
              // ]
              // class: 'editor', // optional
              settings: {
                  height : 86,
                  placeholder: 'write description here...'
              }
          }
      }
  },
  studentId: {
      type: String,
      label: 'Student ID',
      autoform: {
          type: 'select2'
      }
  },
  registerId:{
    type: String,
    label: 'Register ID',
    autoform:{
      type: 'select2'
    }
  },
  _student: {
      type: Object,
      optional: true,
      blackbox: true
  }
});
Collection.studentStatus.attachSchema(Schema.studentStatus);
