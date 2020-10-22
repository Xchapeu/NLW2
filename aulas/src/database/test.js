const Database = require('./db.js');
const createProffy = require('./createProffy.js')
Database.then(async (db) => {

    proffyValue = {
        name: 'Anderson Rodrigo',
        avatar: 'https://avatars3.githubusercontent.com/u/51240977?s=460&u=55cc6debb6a52aaedba74bd0ba777dc42b9c682c&v=4',
        whatsapp: '11974982385',
        bio: 'Estudante de programação'
    }

    classValue = {
        subject: 6,
        cost: '50'
    }

    classScheduleValues = [
        {
            weekday:  1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday:  3,
            time_from: 720,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `);

    //console.log(selectedClassesAndProffys);

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "920"
    `);

    console.log(selectClassesSchedule);
})