// replace DATABASE name
use('DATABASE');

// replace KEY and VALUE
const query = {
  "KEY": { "$regex": "VALUE", "$options": "i" }  // Case-insensitive search for "VALUE" in the "KEY" field.
};

// replace COLLECTION_NAME
const result = db.COLLECTION_NAME.deleteMany(query);

// Output the result of the deletion.
console.log(`${result.deletedCount} documents were deleted.`); 
