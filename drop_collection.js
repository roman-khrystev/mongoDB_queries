// be strong, do this! :(
function dropComparesCollection() {
    const db = getDb();
    return db
        .collection('Compares')
        .drop()
        .then(() => {
            console.log('Collection dropped');
        })
        .catch(err => {
            console.error(err);
        });
}
 
mongoConnect(dropComparesCollection);