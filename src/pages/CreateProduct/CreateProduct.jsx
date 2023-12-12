import React, { useEffect, useState } from 'react'
import './CreateProduct.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../../firebase';
import { addNewProduct } from '../../services/allApi';

function CreateProduct() {

    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: "",
        size: [],
        color: [],
        category: [],
        inStock: null
    })
    const [file, setFile] = useState(null)
    const [imgLink, setImgLink] = useState("")

    console.log(product)
    console.log(file)

    useEffect(() => {
        file && setImgLink(URL.createObjectURL(file))
    }, [file])

    const handleAddProject = async () => {
        const { title, desc, price, size, color, category, inStock } = product;
        if (title && desc && price && size && color && category && file && inStock !== null) {
            const filename = `image-${Date.now()}-${file.name}`
            const storage = getStorage(app);
            const storageRef = ref(storage, filename);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    alert("Something Went Wrong Can't upload image")
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        const res = await addNewProduct({ ...product, image: downloadURL });
                        console.log(res)
                        if (res.status == 201) {
                            alert("Product added successfully")
                            setProduct({
                                title: "",
                                desc: "",
                                price: "",
                                size: [],
                                color: [],
                                category: [],
                                inStock: null
                            })
                            setFile(null)
                        } else {
                            alert("Something went wrong can't add product")
                        }
                    });
                }
            );
        } else {
            alert("Enter Details correctly")
        }
    }

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <div className='rightSideBar'>
                <h2>New Product</h2>
                <div className='newProductOuter'>
                    <div className='createProductbottomLeftSec'>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" />
                        <div className='CreateProduct'>
                            <input type="text" onChange={(e) => setProduct({ ...product, title: e.target.value })} value={product.title} placeholder='product Name' />
                        </div>
                        <div className='CreateProduct'>
                            <input type="text" onChange={(e) => setProduct({ ...product, desc: e.target.value })} value={product.desc} placeholder='product Description' />
                        </div>
                        <div className='CreateProduct'>
                            <input type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} placeholder='product Price' />
                        </div>
                        <div className='CreateProduct'>
                            <input type="text" onChange={(e) => setProduct({ ...product, size: e.target.value.split(",") })} value={product.size.join(",")} placeholder='product SIZES separate by commas' />
                        </div>
                        <div className='CreateProduct'>
                            <input type="text" onChange={(e) => setProduct({ ...product, color: e.target.value.split(",") })} value={product.color.join(",")} placeholder='product COLORS separate by commas' />
                        </div>
                        <div className='CreateProduct'>
                            <input type="text" onChange={(e) => setProduct({ ...product, category: e.target.value.split(",") })} value={product.category.join(",")} placeholder='product CATEGORIES separate by commas' />
                        </div>
                        <div className='CreateProduct'>
                            <label>In Stock</label>
                            <select onChange={(e) => setProduct({ ...product, inStock: e.target.value == "true" ? true : false })} value={product.inStock == true ? "true" : "false"} >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <button onClick={handleAddProject} className='addProjectBtn'>Add Project</button>
                    </div>
                    {imgLink && <img src={imgLink} alt="" />}
                </div>
            </div>
        </div>

    )
}

export default CreateProduct