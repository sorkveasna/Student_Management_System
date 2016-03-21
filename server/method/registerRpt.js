Meteor.methods({
    registerRpt(fromDate, toDate) {
        let data = {};
        let totalPrice = 0;
        let totalDiscount = 0;
        let totalAmount = 0;

        fromDate = moment(fromDate).toDate(); //convert to date
        toDate = moment(toDate).toDate();
        //header
        data.header = {
            date: moment(fromDate).format('MMM/DD/YYYY') + ' - ' +
            moment(toDate).format('MMM/DD/YYYY')
        };
        //end header
        let selector = {
            regDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {
            sort: {regDate: 1}
        };

        let tempContent = Collection.Register.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            totalPrice += obj.price;
            totalDiscount += obj.discount;
            totalAmount += obj.amount;

            // find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            // find subject
            let subjectDoc = Collection.Subject.findOne(obj.subjectId);
            obj._subject = subjectDoc;

            content.push(obj);

        });
        data.price = totalPrice;
        data.discount = totalDiscount;
        data.amount = totalAmount;

        data.content = content;
        return data;
    }
});
