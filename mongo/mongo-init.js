db.auth('admin-user', 'admin-password')

db.reservations.insertOne({
    _id: 1,
    name: 'testing reservation',
    url: 'a test url',
    partySize: 4,
    dates: ['4/14/2020', '4/15/2020'],
    times: ['10:00 AM']
});