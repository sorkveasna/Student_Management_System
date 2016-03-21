//insert
Meteor.methods({
    'userToRole.insert': function (insertDoc) {
        Roles.addUsersToRoles(insertDoc.usernames, insertDoc.roles);
    },

    //update
    'userToRole.update': function (updateDoc) {
        Roles.setUserRoles(updateDoc.$set.usernames, updateDoc.$set.roles);
    },

    //remove
    'userToRole.remove': function (userId) {
        let roles = ['Setting', 'Data', 'Report'];
        Roles.removeUsersFromRoles(userId, roles);
    }
});
