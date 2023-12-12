import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

const header = {
    "Content-Type": "application/json",
    "token": `Bearer ${JSON.parse(sessionStorage.getItem("user")) && JSON.parse(sessionStorage.getItem("user")).accessToken}`
}

//login api
export const loginApi = async (data) => {
    return await commonApi('post', `${BASE_URL}/auth/user/login`, data, '')
}
//get latest 5 users
export const getNewUsers = async (reqHeader) => {
    return await commonApi('get', `${BASE_URL}/auth/user?new=true`, '', reqHeader)
}
//get latest 5 orders
export const getNewOrders = async (reqHeader) => {
    return await commonApi('get', `${BASE_URL}/api/order?new=true`, '', reqHeader)
}
//get User stat
export const getUSerStat = async (reqHeader) => {
    return await commonApi('get', `${BASE_URL}/auth/user/stat`, '', reqHeader)
}
//get income stat
export const getIncomeStat = async () => {
    return await commonApi('get', `${BASE_URL}/api/order/income`, '', header)
}
//get all products
export const getAllProducts = async () => {
    return await commonApi('get', `${BASE_URL}/api/product`, '', header)
}
//get Single products
export const getSingleProducts = async (id) => {
    return await commonApi('get', `${BASE_URL}/api/product/find/${id}`, '', header)
}
//Create or add new product
export const addNewProduct = async (data) => {
    return await commonApi('post', `${BASE_URL}/api/product`, data, header)
}
//Update product
export const updateSingleProduct = async (data, id) => {
    return await commonApi('put', `${BASE_URL}/api/product/${id}`, data, header)
}
//delete product
export const deleteProduct = async (id) => {
    return await commonApi('delete', `${BASE_URL}/api/product/delete/${id}`, {}, header)
}
//get all users
export const getAllUsers = async () => {
    return await commonApi('get', `${BASE_URL}/auth/user`, '', header)
}
