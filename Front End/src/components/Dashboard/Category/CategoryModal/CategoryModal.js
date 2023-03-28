import React, { useState } from 'react'
import { Modal} from 'react-bootstrap';
import Alert from 'sweetalert2'


const CategoryModal = ({showModal, setShowModal})=> {
          const [category, setCategory ] = useState("");
          const handleClose = () => setShowModal(false);

          const handleChange  = (e) =>{
                    setCategory( e.target.value);
          }
          const handleSubmit = async(e)=>{
                    e.preventDefault();
                   if(category.length > 0){
                    const formData = new FormData();
                    formData.set("name", category)
                    const response = await fetch("http://localhost:5000/api/v1/category/create", {
                              method:"POST",
                              body:formData
                    });
                    const {success, message} = await response.json();
                    if(success){
                              Alert.fire(
                                  message,
                                  'Category has been deleted!.',
                                  'success'
                                ) 
                              // close modal 
                              setShowModal(false);
                              // reset category
                              setCategory("");
                    }else{
                              Alert.fire({
                                        icon: 'error',
                                        title: message,
                                        text:'Please try another category name!'
                              })
                    }
                   }else{
                    Alert.fire({
                              icon: 'error',
                              title: 'Category Name required!',
                              text:'You must enter category name!'
                    })
                   }
          }



          return (
                    <div className='category-modal'>
                              <Modal show={showModal} onHide={handleClose} centered>
                              <Modal.Header closeButton>
                                        <Modal.Title className='fs-2'>Add New Category</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                        <div className="row">
                                                  <div className="col-lg-12">
                                                  <form onSubmit={handleSubmit} className='py-4'>
                                                            <div className="input-group w-100">
                                                                      <input type="text" onChange={handleChange} className='form-control w-100 fs-3 py-2' name="category"   placeholder='Category name' defaultValue={category}/>
                                                                      <input type="submit" className='btn btn-success ms-auto fs-3 my-4 py-2 rounded' value="Save " />
                                                            </div>
                                                            </form>
                                                  </div>
                                        </div>
                              </Modal.Body>
                              </Modal>
                    </div>
          )
}

export default CategoryModal
