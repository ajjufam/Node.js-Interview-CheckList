/*
Use case: A user places an order.
We need to:
1. Create an order in the orders collection
2. Decrease the product quantity in the products collection

If one fails — rollback both.
Assume we have 2 schemas:
* Product
* Order
*/

// 🧾 models/Product.js
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  price: Number,
});

module.exports = mongoose.model("Product", productSchema);

// 🧾 models/Order.js
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  totalPrice: Number,
});

module.exports = mongoose.model("Order", orderSchema);

// 🧪 The Transaction Code (Async/Await Style):
const mongoose = require("mongoose");
const Product = require(".models/Product");
const Order = require(".models/Order");

const createOrder = async (productId, quantity) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await Product.findById(productId).session(session);
    if (!product) throw new Error("Product not found");

    if (product.stock < quantity) throw new Error("Insufficient stock");

    // Step 1: Create Order
    const order = await Order.create(
      [
        {
          product: product_id,
          quantity,
          totalPrice: product.price * quantity,
        },
      ],
      { session }
    );

    // step 2 Update product stock
    product.stock -= quantity;
    await product.save({ session });

    // Commit transaction
    await session.commitTransaction();
    session.endSession();
    console.log("Order created and stock updated");
    return order;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("Transaction failed", error.message);
    throw error;
  }
};

// ✅ Usage:
await createOrder("6622f123abcd...", 2);

/* Steps in transaction
step 1 : startSession
step 2 : start Transaction
step 3 : if(all good) commitTransaction else abortTransaction => handle abort in catch
step 4 : endSession
*/
