import React, {  useState } from 'react';
import './AddProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Loader/Loader';


const AddProduct = () => {
    const [product, setProduct] = useState({
        name:"",
        price:"",
        brand:"",
        color:"",
        category:"",
        size:"",
        description:""
    });
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false);

    
    // handle change
    const handleChange = (e)=>{
        const newProduct  ={...product}
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
    }
    
    // handle add product
    const handleSubmit = async (e)=>{
        console.log(product)
        setLoader(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.set("name",product.name);
        formData.set("price",product.price);
        formData.set("brand",product.brand);
        formData.set("color",product.color);
        formData.set("category",product.category);
        formData.set("size",product.size);
        formData.set("description",product.description);

    
    // if upload prodcut image then store product in db
    if(product.name && product.brand && product.price && product.color && product.description ){
        setLoader(false);   
        const res = await fetch('http://localhost:5000/api/v1/product/create',{
           method:'POST',
            body:formData
        });
        console.log(formData)
        const {success, message } =  await res.json();
        if(success){
            setLoader(false);
            toast.success(message,{position: "top-center",autoClose: 500});
            setProduct({
                name:"",
                price:"",
                brand:"",
                color:"",
                category:"",
                size:"",
                description:""
            })
        }else{
            setLoader(false);
            toast.error(message,{position: "top-center",autoClose: 1000});
        }
    }else{
        setLoader(false);
        toast.error("All field are required!",{position: "top-center",autoClose: 1000});
    }

    }
// upload image 
const fileUploader = (e)=>{

    setImage(e.target.files[0])
    
}

    return (
        <div className="addProduct">
                <ToastContainer />
                {loader&& <Loader/>}
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-add-form">
                   <h2>Add New Product</h2>
                   <form onSubmit={handleSubmit}  encType="multipart/form-data">
                       <input type="text" className="mr-2p" onChange={handleChange} name='name' placeholder="Product Name" value={product.name} />
                       <input type="text" onChange={handleChange} name='price' placeholder="৳ Price" value={product.price}/>
                       <input type="text" className="mr-2p"  onChange={handleChange} name='brand' placeholder="Brand" value={product.brand} /> 
                       <input type="text" onChange={handleChange} name='color' placeholder="Color" value={product.color}/>
                       <select name="category" className="mr-2p"  id="category" onChange={handleChange} value={product.category}>
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
                       <select name="size" id="size" onChange={handleChange} value={product.size}>
                            <option value="all">Size</option>
                            <option value="none">None</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="M, L">M, L</option>
                            <option value="M, XL">M, XL</option>
                            <option value="L, XL">L, XL</option>
                            <option value="M, L, XL ">M, L, XL</option>
                        </select>
                       <input name='photo' className="mr-2p"  onChange={fileUploader} type="file"/><br />
                       <textarea name="description"  onChange={handleChange} placeholder='Product description' value={product.description}></textarea>
                       <button className='submit-btn' type="submit">Add Product</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;