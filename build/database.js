const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const qaCollection = db.collection('QAs');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connected to database`);
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addQAPair(qaObject){
    await qaCollection.insertOne(qaObject);
}

async function getQAPairs(userName) {
    const query = { userName: userName }
    const options = {
        projection: { question: 1, answer: 1, _id: 0}
    };
    const cursor = qaCollection.find(query, options)
    const qaList = await cursor.toArray();
    console.log(qaList);
    return qaList;
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addQAPair,
    getQAPairs
};