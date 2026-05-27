import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 120;
      setVisible(nearBottom);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={"back-to-top" + (visible ? ' visible' : '')}
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
