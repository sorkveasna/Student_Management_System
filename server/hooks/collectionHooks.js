Collection.Student.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Student, 3);
});

Collection.Subject.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Subject, 3);
});

Collection.Teacher.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Teacher, 3);
});

Collection.Register.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Register, 3);
});

Collection.Payment.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Payment, 3);
}); 
