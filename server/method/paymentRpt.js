Meteor.methods({
    paymentRpt(fromDate, toDate) {
        let data = {};
        let totalDueAmount = 0;
        let totalPaidAmount = 0;

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        //header
        data.header = {
            date: moment(fromDate).format('MMM/DD/YYYY') + " - " + moment(toDate).format('MMM/DD/YYYY')
        };
        //end header
        let selector = {
            paidDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {
            sort: {paidDate: 1}
        };

        let tempContent = Collection.Payment.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            // find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            // find subject
            let registerDoc = Collection.Register.findOne(obj.registerId);
            let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
            obj._subject = subjectDoc;

            totalDueAmount += obj.dueAmount;
            totalPaidAmount += obj.paidAmount;
            content.push(obj);
        });


        data.dueAmount = totalDueAmount;
        data.paidAmount = totalPaidAmount;
        data.content = content;
        return data;
    }
});
