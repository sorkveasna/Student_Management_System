Meteor.methods({
    outStandingRpt(asAt) {
        let data = {};
        let totalOsAmount = 0;

        asAt = moment(asAt).toDate(); //convert to date

        //header
        data.header = {date: moment(asAt).format('MMM/DD/YYYY')};

        //end header
        let selector = {
            paidDate: {$lte: asAt}
        };
        let option = {
            sort: {paidDate: -1}
        };

        let tempContent = Collection.Payment.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            //check last paid
            let lastPaid = Collection.Payment.findOne({
                registerId: obj._id //paymentID
            }, {
                sort: {
                    _id: -1 //paymentID
                }
            });

            if (lastPaid) {
                if (lastPaid.osAmount > 0) {
                    // find student
                    let studentDoc = Collection.Student.findOne(lastPaid.studentId);
                    lastPaid._student = studentDoc;

                    // find subject
                    let registerDoc = Collection.Register.findOne(lastPaid.registerId);
                    let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
                    lastPaid._subject = subjectDoc;

                    totalOsAmount += lastPaid.osAmount;
                    content.push(lastPaid);
                }
            }
        });

        data.osAmount = totalOsAmount;
        data.content = content;
        return data;
    }
});
