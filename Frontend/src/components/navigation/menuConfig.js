import {
    HiOutlineHome,
    HiOutlineUsers,
    HiOutlineCheckCircle,
    HiOutlineUser,
} from "react-icons/hi";

export const menuConfig = {
    admin: [
        {
            label: "Dashboard",
            path: "/admin/dashboard",
            icon: HiOutlineHome,
        },
        {
            label: "Students",
            path: "/admin/students",
            icon: HiOutlineUsers,
        },
        {
            label: "Approvals",
            path: "/admin/approvals",
            icon: HiOutlineCheckCircle,
        },
    ],

    student: [
        {
            label: "Dashboard",
            path: "/student/dashboard",
            icon: HiOutlineHome,
        },
        {
            label: "Profile",
            path: "/student/profile",
            icon: HiOutlineUser,
        },
    ],
};
