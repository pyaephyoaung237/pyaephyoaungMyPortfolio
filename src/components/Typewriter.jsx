import { useState, useEffect } from 'react'

export default function Typewriter({ roles, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[currentRoleIndex]

    let timer
    if (!isDeleting && currentText === fullText) {
      // Pause at the end of typing before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && currentText === '') {
      // Move to the next role once fully deleted
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {currentText}
      <span className="animate-pulse ml-0.5 inline-block w-0.5 h-5 bg-amber-500 align-middle"></span>
    </span>
  )
}