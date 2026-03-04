"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import { getWhatsAppLink } from "@/utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a locação de máquinas da Jaco Locação.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full shadow-float flex items-center justify-center transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale pelo WhatsApp"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
}
