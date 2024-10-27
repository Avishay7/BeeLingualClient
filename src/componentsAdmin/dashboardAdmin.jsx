import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiGet } from '../services/apiService';
import { reverse } from 'lodash';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addIdMorInfoAdmin } from '../featuers/myDetailsSlice';

const initialUsers = [
  {
    id: 1,
    FirstName: 'William Justice',
    lastName: 'Davis',
    email: 'hvusavztc770@gmail.com',
    role: 'Admin',
  },
  {
    id: 2,
    FirstName: 'double',
    LastName: 'bruh',
    email: 'cuhewbiyfbve@gmail.com',
    role: 'Viewer',
  },
];

const DashboardAdmin = () => {
  let nav = useNavigate();
  let [ar, setAr] = useState(initialUsers);
  let [ar2, setAr2] = useState([]);
  let [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    doApi()
  }, [])

  const doApi = async () => {
    let url = API_URL + "/users"
    try {
      let resData = await doApiGet(url);
      let data = resData.data;
      reverse(data);
      console.log(data);
      setAr(data)
      setAr2(data)
    } catch (error) {
      console.log(error);
    }
  }

  const onSearchClick = () => {
    let tempAr = [];
    for (let index = 0; index < ar2.length; index++) {
      if (ar2[index].FirstName == searchText) {
        tempAr.push(ar2[index]);

      }
    }
    if (tempAr.length > 0) {
      setAr(tempAr)
      console.log("User found");
    } else {
      console.log("User with this name not found");
      if (searchText == "") {
        setAr(ar2)
      }
    }
  }

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  const toAdmin2 = (id) => {
    console.log("_id");
    console.log(id);
    dispatch(addIdMorInfoAdmin({ idMorInfoAdmin: id }));
    nav("/admin/admin222");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 ">
        <div className="d-flex">
          <input type="text" value={searchText} onChange={handleChange} className="d-flex justify-content-between align-items-center mb-4 " placeholder="Search Role" id="" />
          <input type="button" onClick={onSearchClick} value="Search" className="d-flex justify-content-between align-items-center mb-4 " />
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
            {/* <th>Action</th> */}
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                {/* <td>
                <button className="btn btn-sm" onClick={() => handleEditUser(user)}>
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button className="btn btn-sm" onClick={() => handleDelete(user.id)}>
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td> */}

                <td>
                  <button className="btn btn-sm" onClick={() => toAdmin2(user._id)}>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </button>
                </td>

              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAdmin;
