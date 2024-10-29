import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";

function DashboardAdmin222() {
  const initialUsers = [
    {
      id: 1,
      tate: "William Justice",
      time: "Davis",
      level: "hvusa",
    },
    {
      id: 2,
      tate: "William Justice",
      time: "Davis",
      level: "hvusa",
    },
  ];

  let [ar, setAr] = useState(initialUsers);
  const ThisID = useSelector((state) => state.myDetailsSlice.idMorInfoAdmin);
  const [thisUser, setThisUser] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/single/" + ThisID;
    try {
      let data = await doApiGet(url);
      console.log(data.data);
      setThisUser(data.data);
      doApiAllTests();
    } catch (error) {
      console.log(error);
    }
  };

  const doApiAllTests = async () => {
    let url = API_URL + "/chats/allChats/" + ThisID;
    try {
      let data = await doApiGet(url);
      console.log(data.data);
      setAr(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const steps = [
    { label: "Name", step: 1 },
    { label: "LastName", step: 2 },
    { label: "Level", step: 3 },
  ];

  const stepst = [
    { label: "Level", step: 1 },
    { label: "Time", step: 2 },
    { label: "Date", step: 3 },
  ];

  return (
    <div className="container">
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <h1>user details</h1>
        <h4>Name :{thisUser.FirstName}</h4>
      </div>

      <div>
        <table className="table table-striped shadow-lg">
          <thead>
            <tr>
              <th>List</th>
              <th>date</th>
              <th>level</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {ar.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.date_created}</td>
                  <td>{user.level}</td>
                  <td>{user.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAdmin222;
