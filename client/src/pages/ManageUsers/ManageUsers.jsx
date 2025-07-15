import UserForm from '../../components/UserForm/UserForm';
import UsersList from '../../components/UserList/UserList';
import { fetchUsers } from '../../service/UserService';
import './ManageUsers.css';
import {useEffect, useState} from 'react';
import { toast } from 'react-hot-toast'

const ManageUsers = () => {

  const [users, setUsers] = useState([]);
  const [loadiing, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try  {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch(error){
        console.error(error);
        toast.error("Unable to fetch Users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  },[]);

  return (

    <div className="users-container text-light">
      <div className="left-column">
        <UserForm setUsers={setUsers} />
      </div>
      <div className="right-column">
        <UsersList users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}
export default ManageUsers;