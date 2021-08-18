// TODO: write here sql scripts for initial execution (create user table for ex.)
import pool from "../index";

async function createDatabase(){
    await pool.query("CREATE TABLE IF NOT EXISTS users(id UUID NOT NULL gen_random_uuid(), name varchar(100), email text)", (err:any, res:any) => {
            console.log(err, res);
            pool.end();
        });
}

(async()=>{
    await createDatabase();
})()
