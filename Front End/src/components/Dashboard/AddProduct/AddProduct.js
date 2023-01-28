import React, {  useState } from 'react';
import './AddProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [image, setImage] = useState("");

    
    // handle change
    const handleChange = (e)=>{
        const newProduct  ={...product}
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct)
    }
    
    // handle add product
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const data =  new FormData();
        data.append( "file", image);
        data.append("upload_preset", "mystore");
        data.append("cloud_name", "dss1p11ct");

    const res = await fetch(`https://api.cloudinary.com/v1_1/dss1p11ct/upload`,{
            method:'post',
            body:data
        });
    const {url, public_id } =  await res.json();
    const newProduct  ={...product, images:{public_id, url}};
    setProduct(newProduct);
  
    // if upload prodcut image then store product in db
    if(url.length > 0){
        console.log("second")
        const res = await fetch('http://localhost:5000/api/v1/product/create',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(product)
        });
        const {success, message } =  await res.json();
        if(success){
            toast.success(message,{position: "top-center",autoClose: 500});
            console.log(message);
        }else{
            toast.error(message,{position: "top-center",autoClose: 500});
        }
    }

    }
// upload image 
const fileUploader = (e)=>{

    setImage(e.target.files[0])
    
}

    return (
        <div className="addProduct">
                <ToastContainer />
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-add-form">
                   <h2>Add New Product</h2>
                   <form onSubmit={handleSubmit} encType="multipart/form-data">
                       <input type="text" className="mr-2p" onBlur={handleChange} name='name' placeholder="Product Name"/>
                       <input type="text" onBlur={handleChange} name='price' placeholder="৳ Price"/>
                       <input type="text" className="mr-2p"  onBlur={handleChange} name='brand' placeholder="Brand"/> 
                       <input type="text" onBlur={handleChange} name='color' placeholder="Color"/>
                       <select name="category" className="mr-2p"  id="category" onBlur={handleChange}>
                            <option value="all">Category</option>
                            <option value="men">Men Fasion</option>
                            <option value="women">Women Fasion</option>
                            <option value="winter">Winter Collection</option>
                            <option value="electronics">Electronics Accesories</option>
                            <option value="shoes">Shoes Collection</option>
                            <option value="watch">Watch</option>
                            <option value="bag">Bags</option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="shirt">Shirt</option>
                        </select>
                       <select name="size" id="size" onBlur={handleChange}>
                            <option value="all">Size</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="M, L">M, L</option>
                            <option value="M, XL">M, XL</option>
                            <option value="L, XL">L, XL</option>
                            <option value="M, L, XL ">M, L, XL</option>
                        </select>
                       <input name='photo' className="mr-2p"  onChange={fileUploader} type="file"/><br />
                       <textarea name="description"  onBlur={handleChange} placeholder='Product description'></textarea>
                       <button className='submit-btn' type="submit">Add Product</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;