const {MongoClient} = require('mongodb');

async function main() {
  
  const uri = "mongodb+srv://pedro:pedro@cluster0.4ufhi.mongodb.net/create-api?retryWrites=true&w=majority";
  
  
  const client = new MongoClient(uri) 


  try {
    await client.connect()
    await listDatabases(client)
  } catch (e) {
    console.log(e)
  } finally {
    await client.close()
  }
  
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases: ")
  databasesList.databases.forEach(db => console.log(`- ${db.name}`))
}

main().catch(console.error)
