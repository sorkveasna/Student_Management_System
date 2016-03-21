Schema.outStandingRpt = new SimpleSchema({
    asAt: {
        type: Date,
        label: 'As At',
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