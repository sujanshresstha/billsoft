import React from 'react';

const UserForm = ({ user, onSubmit, onCancel }) => {
    const [formData, setFormData] = React.useState({
        name: user ? user.name : '',
        email: user ? user.email : '',
        role: user ? user.role : 'user',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    
    return (
        <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-group">
            <label>Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
    );
    }
export default UserForm;