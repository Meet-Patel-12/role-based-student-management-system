const ProfileForm = ({
  formData,
  onChange,
  onSubmit,
  onCancel,
  loading = false,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          className="w-full border px-4 py-2 rounded
                     focus:outline-none focus:ring"
        />
      </div>

      {/* Email (read-only) */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          disabled
          className="w-full border px-4 py-2 rounded
                     bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded
                     hover:bg-blue-700 disabled:opacity-60">
          {loading ? "Saving..." : "Save Changes"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
