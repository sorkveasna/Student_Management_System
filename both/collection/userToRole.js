Schema.UserToRole = new SimpleSchema({
    usernames: {
        type: String,
        label: "User Name",
        autoform: {
            type: "select2",
            options: function () {
                let user = Meteor.users.find();
                let list = [
                    {label: '(Select One)', value: ''}
                ];

                user.forEach(function (obj) {

                    list.push({
                        label: obj.username,
                        value: obj._id
                    });
                });
                return list;

                // user.forEach(function(obj) {
                //     var userId = obj._id;
                //     var address = '';
                //     // obj.emails.forEach((email)=> {//es6
                //     obj.emails.forEach(function(email) {
                //         address = email.address;
                //     });
                //
                //     list.push({
                //         label: address,
                //         value: obj._id
                //     });
                // });
                // return list;
            }
        }
    },

    roles: {
        type: [String],
        label: "Roles",
        autoform: {
            type: "select-multiple",
            multiple: true,
            options() {
                return [
                    {label: "Data", value: "Data"},
                    {label: "Report", value: "Report"},
                    {label: "Setting", value: "Setting"}
                ]
            }
        }
    }

});
