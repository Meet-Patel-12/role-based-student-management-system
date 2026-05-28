import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfileField from "../../components/ui/ProfileField";
import ProfileForm from "../../components/ui/ProfileForm";
import PageTransition from "../../components/ui/PageTransition";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  // ✅ Sync form when user changes
  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call later
    toast.success("Profile updated successfully");
    setEditMode(false);
  };

  return (
    <PageTransition className="max-w-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">My Profile</h1>
        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="border px-3 py-2 md:px-4 md:py-2 rounded">
            Edit Profile
          </button>
        )}
      </div>

      {/* View Mode */}
      {!editMode && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <ProfileField
            label="Name"
            value={user.name}
          />
          <ProfileField
            label="Email"
            value={user.email}
          />
          <ProfileField
            label="Role"
            value={user.role}
          />
          <ProfileField
            label="Status"
            value={user.status}
          />
        </div>
      )}

      {/* Edit Mode */}
      {editMode && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <ProfileForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => setEditMode(false)}
          />
        </div>
      )}
    </PageTransition>
  );
};

export default Profile;
