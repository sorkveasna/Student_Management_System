Collection.Register = new Mongo.Collection('register');
Schema.Register = new SimpleSchema({
    regDate: {
        type: Date,
        label: 'Register Date',
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
        }
    },
    studyDay: {
        type: String,
        label: 'Study Day',
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Weekday', value: 'Weekday'},
                    {label: 'Weekend', value: 'Weekend'}
                ]
            }
        }
    },
    studyTime: {
        type: String,
        label: 'Study Time',
        autoform: {
            type: 'select2',
            options() {
                let studyDay = AutoForm.getFieldValue('studyDay');
                if (!_.isUndefined(studyDay)) {
                    if (studyDay == 'Weekday') {
                        return [
                            {
                                optgroup: 'Morning',
                                options: [
                                    {label: '08:00 - 09:00', value: '8-9'},
                                    {label: '09:00 - 10:00', value: '9-10'},
                                    {label: '10:00 - 11:00', value: '10-11'},
                                    {label: '11:00 - 12:00', value: '11-12'}
                                ]
                            },
                            {
                                optgroup: 'Afternoon',
                                options: [
                                    {label: '14:00 - 15:00', value: '14-15'},
                                    {label: '15:00 - 16:00', value: '15-16'},
                                    {label: '16:00 - 17:00', value: '16-17'},
                                    {label: '17:00 - 18:00', value: '17-18'}
                                ]
                            }
                        ]
                    }
                    else if (studyDay == 'Weekend') {
                        return [
                            {
                                optgroup: 'Morning',
                                options: [
                                    {label: '08:00 - 11:00', value: '8-11'}
                                ]
                            },
                            {
                                optgroup: 'Afternoon',
                                options: [
                                    {label: '14:00 - 17:00', value: '14-17'}
                                ]
                            }
                        ]
                    }
                }
                return [{label: '(Select One)', value: ''}];
            }
        }
    },
    subjectId: {
        type: String,
        label: 'Subject ID',
        autoform: {
            type: 'select2'
        }
    },
    price: {
        type: Number,
        label: 'Price',
        decimal: true,
        autoform: {
            readonly: true,
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    teacherId: {
        type: String,
        label: 'Teacher ID',
        autoform: {
            type: 'select2'
        }
    },
    discount: {
        type: Number,
        label: 'Discount amount',
        defaultValue: 0,
        autoform: {
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    amount: {
        type: Number,
        label: 'Amount',
        decimal: true,
        autoform: {
            readonly: true,
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    studentStatus:{
        type: String,
        label: 'Student Status',
        min: 1,
        max: 1000,
        autoform: {
            rows: 3,
            placeholder: 'What are you doing right now ...'

        }
    },
    informedBy:{
        type: String,
        label: 'Informed By',
        autoform: {
            rows: 3,
            placeholder: 'Where do you get information from ...'
        },
        min: 1,
        max: 1000
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
    },
    _teacher: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Register.attachSchema(Schema.Register);
