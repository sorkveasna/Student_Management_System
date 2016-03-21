Collection.Teacher = new Mongo.Collection('teacher');
Schema.Teacher = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
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
    telephone: {
        type: String,
        label: 'Telephone'
    },
    subjects: {
        type: [String],
        label: 'Subject Name',
        autoform: {
            type: 'select-multiple',
            multiple: true,
            options() {
                var data = Collection.Subject.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({
                        label: obj._id + ' | ' + obj.name,
                        value: obj.name
                    })
                });
                return list;
            }

        }
    }

});
Collection.Teacher.attachSchema(Schema.Teacher);
