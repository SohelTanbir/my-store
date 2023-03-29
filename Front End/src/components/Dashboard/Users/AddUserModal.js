import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Alert from "sweetalert2";

const AddUserModal = ({ showModal, setShowModal }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
          const newUser = {...user}
          newUser[e.target.name] = e.target.value
          setUser(newUser);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name && user.email && user.password && user.role) {
      const formData = new FormData();
      formData.set("name", user.name);
      formData.set("email", user.email);
      formData.set("password", user.password);
      formData.set("role", user.role);
      const response = await fetch(
        "http://localhost:5000/api/v1/users/signup",
        {
          method: "POST",
          body: formData,
        }
      );
      const { success, message } = await response.json();
      if (success) {
        Alert.fire(message, `Added a new ${user.role}!.`, "success");
        // close modal
        setShowModal(false);
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
          text: `Already you have an account!`,
        });
      }
    } else {
      Alert.fire({
        icon: "error",
        title: "All field are required!",
        text: "You must enter required user information!",
      });
    }
  };

  return (
    <div className="user-modal">
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-2">Add New User</Modal.Title>
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
                    defaultValue={user.name}
                  />
                </div>
                <div className="input-group w-100 mb-5">
                  <input
                    type="email"
                    onChange={handleChange}
                    className="form-control w-100 fs-3 py-3"
                    name="email"
                    placeholder="Email"
                    defaultValue={user.email}
                  />
                </div>
                <div className="input-group w-100 mb-5">
                  <input
                    type="password"
                    onChange={handleChange}
                    className="form-control w-100 fs-3 py-3"
                    name="password"
                    placeholder="Password"
                    defaultValue={user.password}
                  />
                </div>
                <div className="input-group w-100 mb-3">
                  <select name="role"  onChange={handleChange}>
                    <option selected value="user">
                      User
                    </option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                    <div className="input-group w-100 ">
                    <input
                    style={{background:'#FF6000', color:'#fff'}}
                  type="submit"
                  className="btn save-user-btn  ms-auto fs-3 my-4 py-2 rounded"
                  value="Save User"
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

export default AddUserModal;
