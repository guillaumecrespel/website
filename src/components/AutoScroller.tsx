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

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let running = true;

    function step() {
      if (!running || !container) return;
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
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);

    return () => {
      running = false;
      if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, [containerId, speed, direction]);

  return null;
} 