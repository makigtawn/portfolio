import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// --- Terminal Container ---
export function Terminal({ children, className = "", ...props }) {
  return (
    <div
      className={`w-full max-w-lg rounded-xl border border-zinc-800 bg-surface/10 p-4 my-14 font-mono text-sm text-text-primary shadow-2xl ${className}`}
      {...props}
    >
      {/* Terminal Header / Window Controls */}
      <div className="flex items-center space-x-2 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      {/* Terminal Content */}
      <div className="space-y-1">{children}</div>
    </div>
  )
}

// --- Typing Animation Component ---
export function TypingAnimation({
  children = "",
  delay = 0,
  speed = 40,
  className = "",
  ...props
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < children.length) {
        setDisplayedText((prev) => prev + children.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, speed)

    return () => clearInterval(typingInterval)
  }, [started, children, speed])

  return (
    <div className="flex items-center">
      <span className={`block ${className}`} {...props}>
        {displayedText}
      </span>
      {started && displayedText.length < children.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "steps(2)" }}
          className="ml-0.5 inline-block h-4 w-2 bg-zinc-900 dark:bg-zinc-100 "
        />
      )}
    </div>
  )
}

// --- Animated Span (Fade-in Output) ---
export function AnimatedSpan({ children, delay = 0, className = "", ...props }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.2 }}
      className={`block ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  )
}
