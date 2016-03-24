Collection.Student.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Data')
    .apply();

Collection.Register.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Data')
    .apply();

Collection.Payment.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Data')
    .apply();

Collection.Subject.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

Collection.Teacher.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

Collection.studentStatus.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();
