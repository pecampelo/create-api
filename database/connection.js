const {MongoClient} = require('mongodb');

async function main() {
  
  const uri = "mongodb+srv://pedro:pedro@cluster0.4ufhi.mongodb.net/create-api?retryWrites=true&w=majority";
  
  const client = new MongoClient(uri) 

  try {
    await client.connect()
    await listDatabases(client)
    const database = client.db('create-api');
    const sample = database.collection('heroes')
    const api = database.collection('v1.0')

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

async function createListing(client, newListing) {
  const result = await client.db('create-api').collection('v1.0').insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`)
}

main().catch(console.error)
