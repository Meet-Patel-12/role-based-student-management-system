/* ===================== TEXT HELPERS ===================== */

// Capitalize first letter
export const capitalize = (text = "") =>
    text.charAt(0).toUpperCase() + text.slice(1);

/* ===================== DATE HELPERS ===================== */

// Format date nicely
export const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString();
};

/* ===================== STATUS HELPERS ===================== */

// Normalize status safely
export const normalizeStatus = (status = "") =>
    status.toLowerCase();

/* ===================== ERROR HELPERS ===================== */

// Extract Axios error message safely
export const getErrorMessage = (error, fallback = "Something went wrong") =>
    error?.response?.data?.message || fallback;
