rabbitRoutes.route('/subjectListRptGen', {
     name: "subjectListRptGen",
     action: function (params, queryParams) {
         BlazeLayout.render('reportLayout', {
             content: "subjectListRptGen"
         });
     }
 });
