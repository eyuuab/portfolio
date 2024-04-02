// works well for uploading a single image
import React, { useState } from 'react';
import axios from 'axios';

export default function Test() {
    const [preview, setPreview] = useState("");
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        
        var reader = new FileReader();
        reader.onloadend = function () {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const handleSendFile = async (e) => {
        e.preventDefault();

        if (!preview) return;

        try {
            const res = await axios.post("http://localhost:8000/upload", {
                image_url: preview
            });
            console.log(res.data);
            setUploadSuccess(true); // Set upload success to true
            setPreview(""); // Reset preview to remove the image
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1> Select Image</h1>
            <input type="file" onChange={handleFileUpload} />
            <img src={preview} alt="" />
            <button onClick={handleSendFile}>Upload</button>
            {uploadSuccess && <p>Image uploaded successfully to Cloudinary!</p>}
        </div>
    );
}














// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Test() {
//     const [previews, setPreviews] = useState([]);
//     const [uploadSuccess, setUploadSuccess] = useState(false);

//     const handleFileUpload = (e) => {
//         const files = e.target.files;
//         const previewsArray = [];

//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const reader = new FileReader();

//             reader.onloadend = function () {
//                 previewsArray.push(reader.result);
//                 if (previewsArray.length === files.length) {
//                     setPreviews(previewsArray);
//                 }
//             };

//             reader.readAsDataURL(file);
//         }
//     }

//     const handleSendFiles = async (e) => {
//         e.preventDefault();

//         if (!previews.length) return;

//         try {
//             const formData = new FormData();
//             previews.forEach((preview) => {
//                 formData.append('images', preview);
//             });

//             const res = await axios.post("http://localhost:8000/upload", formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(res.data);
//             setUploadSuccess(true);
//             setPreviews([]); // Reset previews
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div>
//             <h1> Select Images</h1>
//             <input type="file" onChange={handleFileUpload} multiple />
//             {previews.map((preview, index) => (
//                 <img key={index} src={preview} alt="" />
//             ))}
//             <button onClick={handleSendFiles}>Upload</button>
//             {uploadSuccess && <p>Images uploaded successfully to Cloudinary!</p>}
//         </div>
//     );
// }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Test() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     async function fetchData() {
//         try {
//             const response = await axios.get("http://localhost:8000/getData");
//             setData(response.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     return (
//         <div>
//             <h1>Messages</h1>
//             {data.map((item) => (
//                 <p >name = {item.name}{item.age}</p>

//             ))}
//         </div>
//     );
// }

// export default Test;
