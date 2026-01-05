import { useEffect, useRef, useState } from "react";

export default function ScrollFade({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(ref.current);
  }, []);

  
  return (
    <div ref={ref} className={`fadeIn ${visible ? "show" : ""}`}>
      {children}
    </div>
  );
}
