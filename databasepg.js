const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "pikachu@77",
    database: "newDB",
    port: 5432
})

client.connect();

client.query(`Select * from semester_details`, (err, res) => {
    if(err)
    {
        console.log("Invalid query");
    }
    else{
        console.log(res.rows);
    }
    client.end();
})