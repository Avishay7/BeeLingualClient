import React from "react";
import { useSelector } from "react-redux";

function DashboardAdmin222() {
    const ThisID = useSelector(state => state.myDetailsSlice.idMorInfoAdmin);

    return (
        <div>Dashboard Admin222 id:{ThisID}</div>
    )
}

export default DashboardAdmin222