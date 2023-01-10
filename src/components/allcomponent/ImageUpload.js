import React, {useState, useEffect} from "react";

export default function Upload(){

const [images, setImages] = useState([]);
const [imageURLs, setImageURLs] = useState([]);

useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
}, [images]);

function onImageChange(e) {
    setImages([...e.target.files]);
}

async function submit(e) {
    e.preventDefault();
    const image = images[0];
    const formData = new FormData();
    formData.append('file', image);
console.log(formData)
console.log(image)
console.log(formData.get('file'), 'test')
console.log('sending fetch request');
    await fetch('http://localhost:3001/user/image-upload',{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        //google read form data in express server
        body: formData
    })
}

return (
//     <>
//     <input type='file' multiple accept='image/*' onChange={onImageChange} />
//     {imageURLs.map(imageSrc => <img src={imageSrc} />) }
// <img src={images}></img>
//     </>
<div>

    <form onSubmit={submit}>
    
    <input type='file' onChange={onImageChange} />
    <button type='submit'>submit</button>
    {/* {imageURLs.map(imageSrc => <img src={imageSrc} />) } */}
    </form>
<img src={imageURLs[0]}></img>
</div>
);








}