const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres"
});

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