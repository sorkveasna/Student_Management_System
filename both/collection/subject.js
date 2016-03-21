Collection.Subject = new Mongo.Collection('subject');
Schema.Subject = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    duration: {
        type: Number,
        label: 'Duration (Hour)'
    },
    price: {
        type: Number,
        label: 'Price',
        decimal: true,
        autoform: {
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
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
    }
});
Collection.Subject.attachSchema(Schema.Subject);