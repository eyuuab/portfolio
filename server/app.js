        // works fine for uploading a single image
const express = require("express");
const cors = require("cors");
const cloudinary = require("./cloudinary.js");
const bodyParser = require("body-parser"); // Import body-parser module
const app = express();

app.use(bodyParser.json({ limit: '10mb' })); // Limit request size to 10MB
app.use(cors());

app.post("/upload", async (req, res, next) => {
    const { image_url } = req.body; // Destructure image_url directly
    try {
        const cloudinary_res = await cloudinary.uploader.upload(image_url, {
            folder: "/cloudinary-demo"
        });
        console.log("image uploaded successfully");
        res.json(cloudinary_res); // Return cloudinary_res directly
    } catch (error) {
        console.log(error);
        console.log("image upload failed");
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});






// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const cloudinary = require("./cloudinary.js");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Multer configuration for handling multipart/form-data
// // Multer configuration for handling multipart/form-data
// const storage = multer.memoryStorage();
// const upload = multer({ 
//     storage: storage,
//     limits: {
//         fileSize: 10 * 1024 * 1024, // 10MB
//         fieldSize: 10 * 1024 * 1024 // 10MB
//     }
// });


// // Route for handling image uploads
// app.post("/upload", upload.array("images"), async (req, res, next) => {
//     try {
//         const images = req.files;

//         if (!images || !images.length) {
//             return res.status(400).json({ error: "No images uploaded" });
//         }

//         const cloudinaryPromises = images.map((image) => {
//             return cloudinary.uploader.upload(image.buffer, {
//                 folder: "/cloudinary-demo"
//             });
//         });

//         const cloudinary_res = await Promise.all(cloudinaryPromises);
//         console.log("Images uploaded to Cloudinary successfully:", cloudinary_res);
//         res.json(cloudinary_res); // Return cloudinary_res directly
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Start server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });







     // fetch data from database
     
// const express = require("express");
// const cors = require("cors");
// const collection = require("./mongo");
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", cors(), (req, res) => {
//     res.send("Welcome to the server");
// });

// app.get("/getData", cors(), async (req, res) => {
//     try {
//         const alldata = await collection.find({});
//         res.json(alldata);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch data" });
//     }
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

        // upload to database and get data
// const express = require("express");
// const cors = require("cors");
// const collection = require("./mongo");
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", cors(), (req, res) => {
    
// })

// app.post("/", cors(), async (req, res) => {

//     const { name } = req.body;
//     const data  = {
//         name: name

//     }
//     await collection.insertMany([data]);
//     res.send(data);
// })

// app.post("/getData", cors(), async (req, res) => {
//     const { name } = req.body
//     try{
//         await collection.insertMany([{name: name}]);
//         const alldata = await collection.find({});
//         res.json(alldata);

//     }
//     catch{
//         res.json("failed");
//         console.log(e);
//     }
// })


// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// })