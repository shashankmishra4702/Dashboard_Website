import React, { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div
            style={{
                width: isSidebarOpen ? '200px' : '60px',
                height: '100vh',
                backgroundColor: '#333',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '20px',
                transition: 'width 0.3s ease'
            }}
        >
            <img
                src="./logo.png"
                alt="logo"
                style={{
                    width: '80px',
                    marginBottom: '20px',
                    cursor: 'pointer'
                }}
                onClick={toggleSidebar}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <NavLink
                    to="dashboard"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px 0',
                        color: '#fff',
                        textDecoration: 'none',
                        width: '100%'
                    }}
                    title={"Dashboard"}
                >
                    <MdSpaceDashboard size={30} />
                    {isSidebarOpen && <span style={{ marginTop: '5px' }}>Dashboard</span>}
                </NavLink>
                <NavLink
                    to="calendar"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px 0',
                        color: '#fff',
                        textDecoration: 'none',
                        width: '100%'
                    }}
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                    {isSidebarOpen && <span style={{ marginTop: '5px' }}>Calendar</span>}
                </NavLink>
                <NavLink
                    to="board"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px 0',
                        color: '#fff',
                        textDecoration: 'none',
                        width: '100%'
                    }}
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                    {isSidebarOpen && <span style={{ marginTop: '5px' }}>Trello Board</span>}
                </NavLink>
                <NavLink
                    to="users"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px 0',
                        color: '#fff',
                        textDecoration: 'none',
                        width: '100%'
                    }}
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                    {isSidebarOpen && <span style={{ marginTop: '5px' }}>Users</span>}
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;
