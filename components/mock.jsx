"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const IncrementalNumber = ({ n, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const intervalRef = useRef(null);
  const increment = n === 400 ? 20 : n <= 200 ? 10 : 1;
  const delay = n === 3 ? 100 : 30;

  useEffect(() => {
    if (inView) {
      const incrementCount = () => {
        if (count < n) {
          setCount(count + increment);
        } else {
          clearInterval(intervalRef.current); // Clear interval when target reached

          setCount(n); // Call optional callback with final value
        }
      };

      intervalRef.current = setInterval(incrementCount, delay);
      return () => clearInterval(intervalRef.current);
    }
  }, [count, inView]);
  return (
    <h1 ref={ref} className={className}>
      {count}+
    </h1>
  );
};

export default IncrementalNumber;
