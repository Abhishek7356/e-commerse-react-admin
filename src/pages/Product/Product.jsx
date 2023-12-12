import React, { useEffect, useState } from 'react'
import './Product.css'
import Chart from '../../components/Chart/Chart'
import { product } from '../../dummyData'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getSingleProducts, updateSingleProduct } from '../../services/allApi'

function Product() {

    const { id } = useParams();
    const [aProduct, setAProduct] = useState({});
    const [updateProduct, setUpdateProduct] = useState({})

    const fetchProduct = async () => {
        const res = await getSingleProducts(id);
        setAProduct(res.data)
        setUpdateProduct(res.data)
    }

    console.log(updateProduct)

    useEffect(() => {
        fetchProduct()
    }, [id])

    const handleUpdateProduct = async () => {
        const { title, desc, price, image, inStock, size, color, category } = updateProduct
        if (title && desc && price && image && inStock && size && color && category) {
            const res = await updateSingleProduct(updateProduct, id)
            // console.log(res)
            if (res.status == 200) {
                alert("Product Updated Successfully")
            } else {
                alert("Something Went Wrong Can't Update Product")
            }
        } else {
            alert("Enter Details Correctly")
        }
    }

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <div className='rightSideBar'>
                <div className='productHeaderSec'>
                    <h2>Product</h2>
                    <Link to={'/new-product'}><button>Create Product</button></Link>
                </div>
                <div className='productDetails'>
                    <div className='chart'>
                        <Chart data={product} title={"Sales Perfomance"} dataKey={"Sales"} />
                    </div>
                    <div className='allProductDetails'>
                        <div className='productHeadDetalis'>
                            <img src={aProduct.image} alt="" />
                            <p>{aProduct.title}</p>
                        </div>
                        <div className='productIdSales'>
                            <h4>ID: </h4>
                            <p>{aProduct._id}</p>
                        </div>
                        <div className='productIdSales'>
                            <h4>Price: </h4>
                            <p>₹ {aProduct.price}</p>
                        </div>
                        <div className='productIdSales'>
                            <h4>In Stock:</h4>
                            <p>{aProduct.inStock ? "Available" : "Not Available"}</p>
                        </div>
                    </div>
                </div>
                <div className='productBottomSec'>
                    <div className='bottomLeftSec'>
                        <div className='editProduct'>
                            <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, title: e.target.value })} value={updateProduct.title} placeholder='product Name' />
                        </div>
                        <div className='editProduct'>
                            <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, desc: e.target.value })} value={updateProduct.desc} placeholder='product Description' />
                        </div>
                        <div className='editProduct'>
                            <input type="number" onChange={(e) => setUpdateProduct({ ...updateProduct, price: Number(e.target.value) })} value={updateProduct?.price} placeholder='product Price' />
                        </div>
                        <div className='editProduct'>
                            <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, size: e.target.value.split(",") })} value={updateProduct?.size?.join(",")} placeholder='product SIZES separate by commas' />
                        </div>
                        <div className='editProduct'>
                            <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, color: e.target.value.split(",") })} value={updateProduct?.color?.join(",")} placeholder='product COLORS separate by commas' />
                        </div>
                        <div className='editProduct'>
                            <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value.split(",") })} value={updateProduct?.category?.join(",")} placeholder='product CATEGORIES separate by commas' />
                        </div>
                        <div className='editProduct'>
                            <label>In Stock</label>
                            <select onChange={(e) => setUpdateProduct({ ...updateProduct, inStock: e.target.value == "true" ? true : false })} value={updateProduct.inStock == true ? "true" : "false"}>
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>
                    </div>
                    <div className='bottomRightSec'>
                        <div className='imgUploadSec'>
                            <img src={updateProduct.image} alt="" />
                            <button className='uploadBtn'><i class="fa-solid fa-upload"></i></button>
                        </div>
                        <button onClick={handleUpdateProduct} className='updateBtn'>Update</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product