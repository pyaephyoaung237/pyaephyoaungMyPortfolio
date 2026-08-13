import { useEffect, useRef, useState } from 'react'

/**
 * useScrollAnimation
 * Returns a ref to attach to any element, and a boolean that flips to
 * true once the element scrolls into the viewport. Pair the ref with
 * one of the .reveal / .reveal-left / .reveal-right / .reveal-scale
 * classes (defined in index.css) and toggle "is-visible" with it.
 *
 * options:
 *  - threshold: how much of the element must be visible (0-1)
 *  - rootMargin: shrinks/grows the trigger area
 *  - once: if true (default), stops observing after first reveal
 */
export function useScrollAnimation({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who've asked for less motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}

export default useScrollAnimation
