import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, eraseSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const type = () => {
        if (!isDeleting) {
          setDisplayText((prev) => text.slice(0, prev.length + 1));
          if (displayText === text) {
            setIsDeleting(true);
          }
        } else {
          setDisplayText((prev) => text.slice(0, prev.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
          }
        }
      };

      const timer = setInterval(type, isDeleting ? eraseSpeed : speed);
      return () => clearInterval(timer);
    };

    handleTyping();
  }, [displayText, isDeleting, text, speed, eraseSpeed]);

  return (
    <div>
      {displayText}
      <span className="cursor-blink">|</span>
    </div>
  );
};

export default TypingEffect;
