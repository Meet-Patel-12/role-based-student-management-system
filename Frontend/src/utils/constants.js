/* ===================== ROLES ===================== */
export const ROLES = {
    ADMIN: "admin",
    STUDENT: "student",
};

/* ===================== STATUS ===================== */
export const STATUS = {
    APPROVED: "approved",
    PENDING: "pending",
    REJECTED: "rejected",
};

/* ===================== ROUTES ===================== */
export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    WAITING_APPROVAL: "/waiting-approval",

    ADMIN_DASHBOARD: "/admin/dashboard",
    ADMIN_STUDENTS: "/admin/students",
    ADMIN_APPROVALS: "/admin/approvals",

    STUDENT_DASHBOARD: "/student/dashboard",
    STUDENT_PROFILE: "/student/profile",

    UNAUTHORIZED: "/unauthorized",
};
