import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Alert from "sweetalert2";
import './UpdateUser.css';  

const UpdateUser = ({ showUpdateModal, setShowUpdateModal, selectedUser }) => {
  const [file, setFile ] = useState("");
  const [previewImageUrl, setPreviewImageUrl ] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const handleClose = () => setShowUpdateModal(false);

  const handleChange = (e) => {
          const newUser = {...user, email:"soheltanbir19@gmail.com"}
          newUser[e.target.name] = e.target.value;
          setUser(newUser);
          const files = e.target.files &&  e.target.files[0]
          let reader = new FileReader();
          reader.onloadend = ()=>{
              setFile(files)
              setPreviewImageUrl(reader.result);
          }
          // read image file
          files && reader.readAsDataURL(files);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name || user.email || user.password || user.role) {
      const formData = new FormData();
      formData.set("image", file);
      if(user.name){
        formData.set("name", user.name);
      }
      if(user.email){
        formData.set("email", user.email);
      }
      if(user.password){
        formData.set("password", user.password);
      }
      if(user.role){
        formData.set("role", user.role);
      }
    
    const response = await fetch(
        `http://localhost:5000/api/v1/users/update/one/`,
        {
          method: "POST",
          body: formData,
          credentials:'include'
        }
      );
      const { success, message } = await response.json();
      if (success) {
        Alert.fire(message, `User updated successfully!`, "success");
        // close modal
        setShowUpdateModal(false);
        // reset user information
        setUser({
          name: "",
          email: "",
          password: "",
          role: "",
        });
      } else {
        Alert.fire({
          icon: "error",
          title: message,
          text: `Sorry we didn't find your account!`,
        });
      }
    } else {
      Alert.fire({
        icon: "error",
        title: "User update failed!",
        text: "You must enter  user information!",
      });
    }
  };




  return (
    <div className="user-update-modal" >
      <Modal show={showUpdateModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-2">Update User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit} className="py-4">
                <div className="input-group w-100 mb-5">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="form-control w-100 fs-3 py-3"
                    name="name"
                    placeholder="Name"
                    defaultValue={selectedUser.name}
                  />
                </div>
                <div className="input-group w-100 mb-5">
                  <input
                    type="email"
                    onChange={handleChange}
                    className="form-control w-100 fs-3 py-3"
                    name="email"
                    placeholder="Email"
                    defaultValue={selectedUser.email}
                  />
                </div>
                <div className="input-group w-100 mb-5">
                  <input
                    type="password"
                    onChange={handleChange}
                    className="form-control w-100 fs-3 py-3"
                    name="password"
                    placeholder="Password"
                    defaultValue={user?.password}
                  />
                </div>
                <div className="input-group w-100 mb-4">
                  <select name="role"  onChange={handleChange}>
                    <option selected value="user">
                      User
                    </option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="d-flex mb-3 align-items-center justify-content-between">
                                    <div className="col-2 offset-1">
                                        <div className="preview-photo">
                                            <img src={previewImageUrl?previewImageUrl:'/user/user.png'} alt="user" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                    <input className="signup-file-input" type="file" name="avatar" onChange={handleChange} placeholder="photo"/> <br />
                                    <labe className="file_input_label">
                                    <FontAwesomeIcon icon={faUpload} />
                                        <span className='ms-2'>Upload photo</span>
                                    </labe>
                                    </div>
                                </div>
                    <div className="input-group w-100 ">
                    <input
                    style={{background:'#FF6000', color:'#fff'}}
                  type="submit"
                  className="btn save-user-btn  ms-auto fs-3 my-4 py-2 rounded"
                  value="Save Changes"
                />
                    </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateUser;
