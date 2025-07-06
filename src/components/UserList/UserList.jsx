
const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="users-container">
      {users.map((user) => (
        <div key={user._id} className="user-card">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default UserList;