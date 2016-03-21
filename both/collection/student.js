Collection.Student = new Mongo.Collection('student'); //create a collection name 'student'
Schema.Student = new SimpleSchema({
    khmerName: {
        type: String,
        label: 'Khmer Name'
    },
    latinName: {
        type: String,
        label: 'Latin Name'
    },
    gender: {
        type: String,
        label: 'Gender',
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ]
            }
        }
    },
    dob: {
        type: Date,
        label: 'Date of Birth',
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
    maritalStatus: {
        type: String,
        label: 'Marital Status',
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Single', value: 'Single'},
                    {label: 'Married', value: 'Married'}
                ]
            }
        }
    },
    telephone: {
        type: String,
        label: 'Telephone',
        optional: true
    },
    email: {
        type: String,
        label: 'Email',
        optional: true
    },
    
    
//Current Address
    currentAddress: {
        type: Object
    },
    'currentAddress.houseNumber': {
        type: String,
        optional: true
    },
    'currentAddress.group': {
        type: String,
        optional: true
    },
    'currentAddress.village': {
        type: String
    },
    'currentAddress.commune': {
        type: String

    },
    'currentAddress.district': {
        type: String
    },
    'currentAddress.province': {
        type: String
    },

    //Emergency Contact
    emergencyContact: {
        type: Object
    },
    'emergencyContact.name': {
        type: String
    },
    'emergencyContact.gender': {
        type: String,
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ]
            }
        }
    },
    'emergencyContact.relation': {
        type: String
    },
    'emergencyContact.telephone': {
        type: String
    },
    'emergencyContact.email': {
        type: String,
        optional: true
    }

});

Collection.Student.attachSchema(Schema.Student);
