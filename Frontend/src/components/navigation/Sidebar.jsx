import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { menuConfig } from "./menuConfig";

const Sidebar = () => {
  const { role } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const menuItems = menuConfig[role] || [];

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded"
        onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300`}>
        <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
          Student MS
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded transition
                  ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
                }>
                {Icon && <Icon className="text-lg" />}
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
