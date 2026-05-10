"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

export default function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShouldLoad(true) },
      { rootMargin: "300px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      className={className}
      {...props}
    />
  )
}
