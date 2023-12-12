import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { deleteProduct, getAllProducts } from '../../services/allApi';
import { format } from 'timeago.js'

function ProductList() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await getAllProducts();
        setProducts(res.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

    const handleDeleteProduct = async (id) => {
        console.log(id)
        const res = await deleteProduct(id);
        console.log(res)
        if (res.status == 200) {
            fetchProducts();
            alert(res.data)
        }
    }

    const AllproductList = products.map((item, key) => {
        return (
            <tr>
                <td className='usernameAndPropic'>
                    <img className='productImage' src={item.image} alt="" />
                    <p className='userName'>{item.title.slice(0, 50)} ...</p>
                </td>
                <td>{item.inStock ? "Available" : "Not Available"}</td>
                <td>₹ {item.price}</td>
                <td>{format(item.createdAt)}<br />({item.createdAt})</td>
                <td className='actionBtns'>
                    <Link to={'/product/' + item._id}><button className='statusBtn' style={{ cursor: 'pointer' }}>View & Edit</button></Link>
                    <button onClick={() => handleDeleteProduct(item._id)} className='deleteBtn'><i className='fa-solid fa-trash'></i></button>
                </td>
            </tr>
        )
    })

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <div className='rightSideBar'>
                <div className='productListContainer'>
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>inStock</th>
                                <th>Price</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllproductList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductList