db.auth('admin-user', 'admin-password')

db.reservations.insertOne({
    _id: 1,
    name: 'testing reservation',
    url: 'a test url',
    partySize: 4,
    startDate: '4/14/2020',
    endDate: '4/15/2020',
    time: '10:00 AM'
});