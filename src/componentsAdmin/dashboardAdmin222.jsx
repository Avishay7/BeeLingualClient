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

      const steps = [
        {label:"Name",step:1},
        {label:"LastName",step:2},
        {label:"Level",step:3}
      ];

      const stepst = [
        {label:"Level",step:1},
        {label:"Time",step:2},
        {label:"Date",step:3}
      ];

    return (
        <div className="">
           
            <div style={{textAlign:"center", justifyContent:"center"}}>
              <h1>user details</h1>
              <div className="border border-praimary-3 w-50">
                {steps.map(({label,step})=>(
                   <div key={step} className="">
                    <p>{label}:</p>

                   </div>
                ))}
              
              </div>
            </div>

            <div>
              <div>
                {stepst.map(({label,step})=>(
                  <p>{label}</p>
                ))}

              </div>
            </div>
        </div>
    )
}

export default DashboardAdmin222