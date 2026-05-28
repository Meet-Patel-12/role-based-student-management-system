import api from "./axios";

/* ===================== ADMIN APIs ===================== */

// 📋 Get all students (pagination + search)
export const fetchStudents = async ({ page = 1, search = "" }) => {
    const response = await api.get(
        `/students?page=${page}&search=${search}`
    );
    return response.data;
};

// ⏳ Get pending students for approval
export const fetchPendingStudents = async () => {
    const response = await api.get("/students/pending");
    return response.data;
};

// ✅ Approve student
export const approveStudent = async (studentId) => {
    const response = await api.patch(
        `/students/${studentId}/approve`
    );
    return response.data;
};

// ❌ Reject student
export const rejectStudent = async (studentId) => {
    const response = await api.patch(
        `/students/${studentId}/reject`
    );
    return response.data;
};

/* ===================== STUDENT APIs ===================== */

// 👤 Get logged-in student profile
export const getMyProfile = async () => {
    const response = await api.get("/students/me");
    return response.data;
};

// ✏️ Update logged-in student profile
export const updateMyProfile = async (profileData) => {
    const response = await api.put(
        "/students/me",
        profileData
    );
    return response.data;
};
