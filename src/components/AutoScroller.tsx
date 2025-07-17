import { useEffect, useRef, useState } from "react";

interface AutoScrollerProps {
  containerId: string;
  speed?: number; // pixels par frame (toujours positif)
}

/**
 * AutoScroller animates the horizontal scroll of a container.
 * Pauses on mouse/touch, resumes on leave.
 * When reaching an edge, reverses direction for infinite ping-pong scroll.
 */
export function AutoScroller({ containerId, speed = 0.5 }: AutoScrollerProps) {
  const intervalRef = useRef<number | null>(null);
  const [direction, setDirection] = useState(speed >= 0 ? 1 : -1);
  const isUserScrolling = useRef(false);
  const lastScrollLeft = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let running = true;

    function step() {
      if (!running || !container || isUserScrolling.current) return;
      container.scrollLeft += Math.abs(speed) * direction;

      // Inverser la direction aux extrémités
      if (container.scrollLeft <= 0) {
        setDirection(1);
      } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        setDirection(-1);
      }

      intervalRef.current = requestAnimationFrame(step);
    }

    intervalRef.current = requestAnimationFrame(step);

    // Détecter le scroll manuel
    function handleScroll() {
      if (!container) return;
      if (Math.abs(container.scrollLeft - lastScrollLeft.current) > 1) {
        isUserScrolling.current = true;
        
        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        // Resume auto-scroll after user stops scrolling for 1 second
        scrollTimeout.current = setTimeout(() => {
          isUserScrolling.current = false;
        }, 1000);
      }
      lastScrollLeft.current = container.scrollLeft;
    }

    // Pause au survol ou au toucher
    function pause() {
      running = false;
      if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
    }
    
    function resume() {
      if (!running) {
        running = true;
        intervalRef.current = requestAnimationFrame(step);
      }
    }

    // Event listeners
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);
    container.addEventListener("touchmove", pause);
    container.addEventListener("scroll", handleScroll);

    return () => {
      running = false;
      if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
      container.removeEventListener("touchmove", pause);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerId, speed, direction]);

  return null;
} 