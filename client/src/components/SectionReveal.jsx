import { motion } from "framer-motion"

export default function SectionReveal({ children, delay = 0 }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.08 }}
  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
>
  {children}
</motion.div>
  )
}