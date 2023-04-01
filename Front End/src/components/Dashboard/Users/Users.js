import React, { useEffect, useState } from 'react';
import './Users.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../Loader/Loader'
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotFoundMessage  from '../../NotFoundMessage/NotFoundMessage';
import Alert from 'sweetalert2'
import AddUserModal from './AddUserModal';



const Users = () => {
    const [allUsers, setAllUsers ] = useState([]);
    const [loading , setLoading ] = useState(true);
    const [showModal, setShowModal ] = useState(false);

    const loadUsers = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/users/all");
        const {success, users} = await res.json();
        // off loader
        if(success || !success){
            setLoading(false);
        }
        setAllUsers(users);

    }


    //  handle side effect actions
    useEffect(()=>{
        loadUsers();
    },[allUsers])

    // handle modal close or Show
    const handleModal = ()=>{
        setShowModal(!showModal)
    }
console.log(allUsers);
   
    const deleteUser = async(id)=>{
        const {isConfirmed} = await   Alert.fire({
            title: 'Are you sure want to delete?',
            text: "You will be able to create new user again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          });
          if(isConfirmed){
            const response = await fetch(`http://localhost:5000/api/v1/users/delete/${id}`,{
                method:"DELETE"
            })
            const {success, message } = await response.json();
            if(success){
                setLoading(false);
                Alert.fire(
                    message,
                    'User has been deleted!.',
                    'success'
                  ) 
            }else{
                Alert.fire({
                    icon: 'error',
                    title: message,
                  })
            }
        }

        
    }




    return (
        <div className="all-orders">
            <DashboardHeader/>
            <AddUserModal showModal={showModal} setShowModal={setShowModal}/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="users-main">
                    <div className="users-header">
                    <h2>All users({allUsers?allUsers?.length:0})</h2>
                    <button onClick={handleModal}>Add user</button>
                    </div>
                    <div className="row">
                        <div className="users-container">
                           {!loading? <div className="users-table">
                                {allUsers?.length?
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Photo</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>CreatedAt</th>
                                        <th>Created  By</th>
                                        <th>Action</th>
                                    </tr>
                                    {allUsers.map(user =>(
                                        <tr>
                                        <td>{user.name}</td>
                                        <td><img src={user.image[0]?user.image[0].url : '/user/user.png' } alt="No Photos" /></td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.createdAt.toLocalTimeString}</td>
                                        <td>Sohel Rana</td>
                                        <td>
                                            <Link to="/users/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                            <button className='action-btn delete-btn' onClick={()=> deleteUser(user._id)}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                                        </td>
                                    </tr>
                                    ))}
                                </table>
                                :
                                <NotFoundMessage message='There is no active users!'/>
                            }
                              
                            </div>
                            :<Loader/>    
                            }
                        </div>
                      
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Users;