const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const parcelRoutes = require("./routes/parcelRoutes");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:admin@ecommerceapp.qwcsh.mongodb.net/overdrivelogistics?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error."));
db.once("open", () => {
  console.log("We're connected to the cloud database.")
//   mongoose.set("strictQuery", false);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRoutes);
app.use("/parcels", parcelRoutes);

app.listen(process.env.PORT || port, () => {
	console.log(`API is now online on port ${port}`);
})
