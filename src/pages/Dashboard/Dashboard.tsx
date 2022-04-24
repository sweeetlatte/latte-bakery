import { Outlet } from "react-router-dom";

import "../../components/Dashboard/Sidebar/sidebar.css";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}
