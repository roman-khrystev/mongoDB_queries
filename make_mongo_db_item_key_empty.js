// 1. Open the MongoDB shell and connect to your cluster. Mongosh.
// 2. Run "use YOUR_DATABASE_NAME" to switch to the database you want to work with.
// 3. Run the following command to update all documents in the "COLLECTION_NAME" collection where the "keyname" field exists:

const query = { "keyname": { "$exists": true } }; 
const update = { $set: { "keyname": "" } }; 
const result = db.COLLECTION_NAME.updateMany(query, update); 
print(`${result.modifiedCount} documents were updated.`); 