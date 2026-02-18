import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import user from "./models/user.js";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const seedData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    // Users
    const users = [
      { name: "User One", email: "user1@example.com", password: bcrypt.hashSync("123456", 10) },
      { name: "User Two", email: "user2@example.com", password: bcrypt.hashSync("123456", 10) }
    ];
    const createdUsers = await User.insertMany(users);

    // Products
    const products = [];
    for (let i = 1; i <= 10; i++) {
      products.push({
        name: `Product ${i}`,
        price: i * 100,
        description: `Description for product ${i}`,
        image: `product${i}.jpg`,
        user: createdUsers[i % 2]._id,
      });
    }

    await Product.insertMany(products);
    console.log("Seed data inserted successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
