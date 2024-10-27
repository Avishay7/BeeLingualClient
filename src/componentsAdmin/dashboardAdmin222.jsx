import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";

function DashboardAdmin222() {
    const initialUsers = [
        {
          id: 1,
          tate: 'William Justice',
          time: 'Davis',
          level: 'hvusa',
        },
        {
          id: 2,
          tate: 'William Justice',
          time: 'Davis',
          level: 'hvusa',
        },
      ];

      let [ar, setAr] = useState(initialUsers);
    const ThisID = useSelector(state => state.myDetailsSlice.idMorInfoAdmin);
    const [thisUser, setThisUser] = useState([]);

    

    useEffect(() => {
        doApi()
    }, []);
    
      const doApi = async () => {
        let url = API_URL + "/users/single/"+ThisID;
        try {
          let data = await doApiGet(url);
          console.log(data.data);
          setThisUser(data.data);
        //   setSelectedLevel(data.data.level);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
            
            <div>Dashboard Admin222 id:{ThisID}</div>
            <div>name:{thisUser.FirstName}</div>
        </div>
    )
}

export default DashboardAdmin222