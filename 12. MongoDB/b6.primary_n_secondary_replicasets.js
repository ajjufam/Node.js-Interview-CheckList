// A replica set is a group of MongoDB servers that maintain the same data set through replication.
// Key roles:
// * Primary: The node that receives all write operations.
// * Secondary: Nodes that replicate the primary's data set and can be used for read operations or failover.

// Why ?
// * High Availability: If the primary fails, a secondary is promoted to primary automatically.
// * Data Redundancy: All data is replicated, minimizing risk of data loss.
// * Read Scaling (with readPreference): Read from secondaries in some scenarios.
// * Disaster Recovery: Backups can be taken from secondaries to avoid impacting production.

// 🔵 How Replica Set Works:
// * Writes always go to the primary.
// * Secondaries constantly replicate the oplog (operation log) from the primary.
// * If the primary goes down, the remaining secondaries hold an election to pick a new primary.

/*
🛠 Example: Setting Up a MongoDB Replica Set Locally
For demo purposes, we’ll simulate a replica set using 3 mongod processes on your local machine.
📁 Step 1: Create Folders for Data Storage

mkdir - p / data / rs0 / data / rs1 / data / rs2;

🚀 Step 2: Start MongoDB Instances (Different Ports)
Terminal 1:
mongod --replSet "rs0" --port 27017 --dbpath /data/rs0 --bind_ip localhost --oplogSize 128

Terminal 2:
mongod --replSet "rs0" --port 27018 --dbpath /data/rs1 --bind_ip localhost --oplogSize 128

Terminal 3:
mongod --replSet "rs0" --port 27019 --dbpath /data/rs2 --bind_ip localhost --oplogSize 128

🧠 Step 3: Initiate the Replica Set
Open a mongo shell connected to one instance:
mongo --port 27017

Then run:
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
})

✅ Step 4: Check Replica Set Status
rs.status()
You’ll see one member with stateStr: "PRIMARY" and others as "SECONDARY".

🧪 Step 5: Test Failover (Optional)
You can stop the primary mongod process (e.g., on port 27017), and after a few seconds, MongoDB will automatically 
elect a new primary from the secondaries.

🔄 Example Use in Node.js with Mongoose
Connection string:
mongoose.connect(
  'mongodb://localhost:27017,localhost:27018,localhost:27019/mydb?replicaSet=rs0',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

This ensures Mongoose is replica set–aware and can handle failover automatically.

🟣 Summary
* Primary: Handles all writes
* Secondary: Read-only replicas for redundancy & failover
* Replication keeps all nodes in sync
* Auto-failover ensures uptime
*/

/*
| Feature       | Replica Set                      | Sharding                                      |
| ------------- | -------------------------------- | --------------------------------------------- |
| Main Goal     | Availability & Fault Tolerance   | Horizontal Scalability                        |
| Data Location | Every node has full copy of data | Each shard has a portion of the data          |
| Used For      | Uptime, failover, backups        | Large-scale apps (millions of users or docs)  |
| Complexity    | Easy to set up                   | Complex to design (requires shard keys, etc.) |
*/
