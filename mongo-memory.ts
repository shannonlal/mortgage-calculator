import { MongoMemoryReplSet } from 'mongodb-memory-server';

let replset;


const launchMongoDB = async() => {
    // To use Transactions, the "storageEngine" needs to be changed to `wiredTiger`
    const replset = await MongoMemoryReplSet.create({ replSet: { count: 4, storageEngine: 'wiredTiger' } }); // This will create an ReplSet with 4 members and storage-engine "wiredTiger"

    const uri = replset.getUri();

    console.log( 'Mongo URI', uri);

    // The ReplSet can be stopped again with
    //await replset.stop();
}

launchMongoDB();

