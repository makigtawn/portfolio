import { motion } from "motion/react";

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} 
      
      animate={{ opacity: 1, scale: 1 }}    
      
      transition={{ duration: 0.5 }}        
      
      whileHover={{ scale: 1.1 }}           
      
      style={{ width: 100, height: 100, background: "skyblue" }}
    />
  );
}
