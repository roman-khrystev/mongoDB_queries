import { mongoConnect } from './database.js';
import { getDb } from './database.js';

function clearDescriptions() {
    const db = getDb();
    return db
      .collection('Device')
      .updateMany(
        { descrTop: { $exists: true } },
        { $set: { descrTop: "" } }
      )
      .then(result => {
        console.log('Updated:', result.modifiedCount);
      })
      .catch(err => {
        console.log(err);
      });
}
mongoConnect(clearDescriptions); 