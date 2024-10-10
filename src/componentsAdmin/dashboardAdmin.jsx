import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialUsers = [
  {
    id: 1,
    firstName: 'William Justice',
    lastName: 'Davis',
    email: 'hvusavztc770@gmail.com',
    role: 'Admin',
  },
  {
    id: 2,
    firstName: 'double',
    lastName: 'bruh',
    email: 'cuhewbiyfbve@gmail.com',
    role: 'Viewer',
  },
];

const DashboardAdmin = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userIdToEdit, setUserIdToEdit] = useState(null); // מזהה של המשתמש בעריכה
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Viewer',
  });

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddUser = () => {
    if (editMode) {
      // עדכון משתמש
      setUsers(users.map(user =>
        user.id === userIdToEdit ? { ...newUser, id: userIdToEdit } : user
      ));
      setEditMode(false); // חזרה למצב רגיל
    } else {
      // הוספת משתמש חדש
      const userToAdd = { ...newUser, id: users.length + 1 };
      setUsers([...users, userToAdd]);
    }
    setShowModal(false);
    setNewUser({ firstName: '', lastName: '', email: '', role: 'Viewer' });
  };

  const handleEditUser = (user) => {
    setNewUser(user); // טעינת פרטי המשתמש לטופס
    setUserIdToEdit(user.id); // שמירת מזהה המשתמש לעריכה
    setEditMode(true); // מעבר למצב עריכה
    setShowModal(true); // פתיחת המודאל
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 ">
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          {editMode ? 'Edit User' : 'Add User'} {/* הצגת הכותרת המתאימה */}
        </button>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search user"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="table table-striped shadow-lg">
        <thead>
          <tr>
            <th>List</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Role</th>
            <th>Action</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <button className="btn btn-sm" onClick={() => handleEditUser(user)}>
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button className="btn btn-sm" onClick={() => handleDelete(user.id)}>
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td>

              <td>
                <button className="btn btn-sm" >
                  <i class="bi bi-arrow-right-circle-fill"></i>
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>


      {showModal && (
        <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? 'Edit User' : 'Add New User'}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => { setShowModal(false); setEditMode(false); }}
                  style={{ marginLeft: 'auto' }}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={newUser.firstName}
                  onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                  className="form-control mb-2"
                />

                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={newUser.lastName}
                  onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                  className="form-control mb-2"
                />

                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="form-control mb-2"
                />

                <label>Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="form-control mb-2 "
                >
                  <option value="Viewer">Viewer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => { setShowModal(false); setEditMode(false); }}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleAddUser}>
                  {editMode ? 'Update User' : 'Add User'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;
