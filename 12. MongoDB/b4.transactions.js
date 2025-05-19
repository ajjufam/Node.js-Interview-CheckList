// MongoDB Transactions allow you to execute multiple operations in an "all-or-nothing" way. That means either all
// operations succeed, or if any fail — all changes are rolled back.
// Think of it like a promise chain:
// * ✅ If everything runs fine — commit the changes
// * ❌ If something fails — revert everything
// MongoDB transactions are available only on replica sets (or sharded clusters with config) and must be used carefully
// for performance.

/* Steps in transaction
step 1 : startSession
step 2 : start Transaction
step 3 : if(all good) commitTransaction else abortTransaction => handle abort in catch
step 4 : endSession
*/

// Why ?
// Real-world use cases:
// * Transferring money between accounts: Debit from A, Credit to B
// * Creating an order: Insert into orders, update product stock
// * Writing to multiple collections that must stay in sync

// Example
// 🧾 Use case:
// User A sends ₹500 to User B.
// You need to:
// 1. Deduct ₹500 from User A’s balance
// 2. Add ₹500 to User B’s balance
// 3. Record the transaction in a Transaction collection
//
// If any of these steps fail, everything should roll back — because money can't "vanish" or get "duplicated".
// That's where MongoDB Transactions shine. 💸

// 🧱 MongoDB Schemas
// models/User.js:
const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  balance: Number,
});

module.exports = mongoose.model("User", userSchema);

// models/Transaction.js:
const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  Timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);

// 🔥 Full Transaction Code
// transferMoney.js:
const mongoose = require("mongoose");
const User = require("./models/User");
const Transaction = require(".models/Transaction");

const transferMoney = async (fromUserId, toUserId, amount) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const fromUser = await User.findById(fromUserId).session(session);
    const toUser = await User.findById(toUserId).session(session);

    if (!fromUser || !toUser) throw new Error("User not found");
    if (fromUser.balance < amount) throw new Error("Insufficient funds");

    // 1. deduct from sender
    fromUser.balance -= amount;
    await fromUser.save({ session });

    // 2. Add to Receiver
    toUser.balance += amount;
    await toUser.save({ session });

    // 3. record the transaction
    await Transaction.create(
      [
        {
          from: fromUser._id,
          to: toUser._id,
          amount,
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();
    console.log("✅ Transfer successful");
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("Transfer failed", err.message);
  }
};

// 🧪 Example Usage:
await transferMoney("6622a1...", "6622a2...", 500);

// check b4.transactions_ex2.js for more ex..

// 📤 Output Examples:
// Success:

// ✅ Transfer successful
// User A: balance = ₹9500 → ₹9000
// User B: balance = ₹2000 → ₹2500
// Transaction created

// Failure (e.g., not enough balance):
// ❌ Transfer failed: Insufficient funds
// All changes rolled back. Database is untouched.

// 💡 Why This Is Important

// In a money system:
// You must not update one user and forget the other
// You must not record a transaction if the money wasn’t actually moved
// Transactions ensure atomicity: all or nothing ✅
