Collection.Payment = new Mongo.Collection('payment');

Schema.Payment = new SimpleSchema({
    paidDate: {
        type: Date,
        label: 'Paid Date',
        defaultValue: moment().toDate(),
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'MMM/DD/YYYY'
                }
            }
        }
    },
    studentId: {
        type: String,
        label: 'Student ID',
        autoform: {
            type: 'select2'
            // allowClear: true
        }
    },
    registerId: {
        type: String,
        label: 'Register ID',
        autoform: {
            type: 'select2'
        }
    },

    dueAmount: {
        type: Number,
        label: 'Due Amount',
        decimal: true,
        autoform: {
            readonly: true,
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },

    paidAmount: {
        type: Number,
        label: 'Paid Amount',
        autoform: {
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }

    },

    osAmount: {
        type: Number,
        label: 'OS Amount',
        decimal: true,
        autoform: {
            readonly: true,
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },

    voucherId: {
        type: String,
        label: 'Voucher ID'
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    },
    _subject: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Payment.attachSchema(Schema.Payment);
