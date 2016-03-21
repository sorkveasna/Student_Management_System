Schema.registerRpt = new SimpleSchema({
    fromDate: {
        type: Date,
        label: 'From Date',
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
    toDate: {
        type: Date,
        label: 'To Date',
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'MMM/DD/YYYY',
                    pickTime: false
                }
            }
        }
    }

});