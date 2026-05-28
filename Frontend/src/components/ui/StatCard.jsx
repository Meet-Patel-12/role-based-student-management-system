import { motion } from "framer-motion";

const StatCard = ({ title = "-", value = "-", color = "text-gray-800" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white p-6 rounded-lg shadow border">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </motion.div>
  );
};

export default StatCard;
