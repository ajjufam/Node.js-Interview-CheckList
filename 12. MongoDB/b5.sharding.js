// Sharding is MongoDB’s way of scaling out — it splits (partitions) large data sets across multiple machines called shards.
// So instead of storing 10 million documents on 1 server, it splits them across many servers (shards).
// Each shard contains a subset of your data.

// This improves:
// * Performance (read/write throughput)
// * Storage capacity
// * Scalability **

// Why ?
// Use MongoDB Sharding when:
// * Your data set becomes too large for a single server (RAM or storage)
// * Your read/write load exceeds a single node
// * You want horizontal scaling (add more machines to scale)

// Example Use Cases:
// * Social media with billions of users
// * E-commerce storing millions of orders/products
// * Logging/Analytics data at massive scale

// 🔵 HOW Does It Work?
// A MongoDB sharded cluster consists of:
// * Config Servers (store metadata and cluster config)
// * Query Router (mongos) – directs the query to appropriate shard
// * Shards (the actual MongoDB servers holding data)
