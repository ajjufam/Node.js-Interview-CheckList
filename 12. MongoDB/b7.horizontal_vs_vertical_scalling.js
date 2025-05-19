/*
🧱 1. Vertical Scaling (Scale Up)
📌 What is it?
Adding more power (CPU, RAM, storage) to a "single machine/server."

🔧 Example:
* Upgrading from 8GB RAM → 32GB RAM
* Upgrading from 4-core CPU → 16-core CPU

✅ Pros:
* Simple to implement
* No changes needed in your code (usually)

❌ Cons:
* There's a physical limit (you can't scale infinitely)
* Usually more expensive hardware
* Downtime may be needed to upgrade
*/

/*
🧱 2. Horizontal Scaling (Scale Out)
📌 What is it?
Adding "more machines (nodes/servers)" and distributing the load across them.

🔧 Example:
* Add more app servers behind a load balancer
* In MongoDB: Sharding (splitting data across nodes)

✅ Pros:
* Scalability is almost infinite
* Better fault tolerance (if one node fails, others handle the load)
* Ideal for distributed systems and microservices

❌ Cons:
* More complex architecture
* Requires data partitioning (e.g., shard keys in MongoDB)
* Code/configuration often needs to support distribution
*/

/*
🆚 Summary Table
| Feature            | Vertical Scaling              | Horizontal Scaling                   |
| ------------------ | ----------------------------- | ------------------------------------ |
| Also called        | Scale Up                      | Scale Out                            |
| Method             | Add resources to 1 server     | Add more servers/nodes               |
| Complexity         | Low                           | High                                 |
| Cost efficiency    | Expensive for high specs      | Cost-effective for commodity servers |
| Failure resistance | Low (single point of failure) | High (distributed)                   |
| Examples           | Add more RAM/CPU to a DB      | Add more app servers or DB shards    |
*/
