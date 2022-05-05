const {MongoClient} = require('mongodb');

async function main() {
	// we'll add code here soon
    const uri = "mongodb+srv://user123:user123@cluster0.5kmj6.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }

    finally {
        await client.close();
    }

}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};