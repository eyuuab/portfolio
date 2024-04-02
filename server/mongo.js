const mongosose = require("mongoose");
mongosose
  .connect("mongodb://localhost:27017/portfolio")

  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("not connected");
  });

const newSchema = new mongosose.Schema({
    name:{
        type:String,
        required:true
    }
})

const collection = mongosose.model("collection",newSchema);
 module.exports = collection;
