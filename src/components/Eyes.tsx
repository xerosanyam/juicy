import { useState, useEffect, useRef } from "react";

const EyesFollowingMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    eyeRefs.forEach((ref) => {
      if (ref.current) {
        const eye = ref.current;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(
          mousePosition.y - eyeCenterY,
          mousePosition.x - eyeCenterX
        );
        const distance = Math.min(
          eye.offsetWidth / 4,
          Math.sqrt(
            Math.pow(mousePosition.x - eyeCenterX, 2) +
              Math.pow(mousePosition.y - eyeCenterY, 2)
          )
        );

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        const pupil = eye.firstChild as HTMLElement;
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition]);

  return (
    <div
      id="face"
      className="w-48 h-24 bg-gray-400 rounded-full flex justify-around items-center"
    >
      {[0, 1].map((i) => (
        <div
          id="eye"
          key={i}
          ref={eyeRefs[i]}
          className="w-20 h-16 bg-white rounded-full flex justify-center items-center overflow-hidden"
        >
          <div id="pupil" className="w-8 h-8 bg-black rounded-full absolute" />
        </div>
      ))}
    </div>
  );
};

export default EyesFollowingMouse;
