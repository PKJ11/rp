import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import img1 from "../assests/tenor.gif";
import img2 from "../assests/img2.gif";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [showYesImage, setShowYesImage] = useState(false);
  const imageRef = useRef();

  const handleYesClick = () => {
    setYesClicked(true);
    setShowImage(false);
    setShowYesImage(true);
  };

  useEffect(() => {
    if (yesClicked) {
      const timeoutId = setTimeout(() => {
        setShowYesImage(false);
        navigate('/LovePage1');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [yesClicked, navigate]);

  return (
    <div className='home-container' style={{ backgroundImage: yesClicked ? `url(${img2})` : 'none' }}>
      <h1>Welcome to the Home Page!</h1>
      <img
        ref={imageRef}
        src={img1}
        alt="Cudd Milk and Mocha GIF"
        style={{ width: '320px', background: 'black' }}
      />
      <p style={{ color: 'black', fontSize: '30px', fontWeight: 'bold', margin: '35px' }}>
        Will please Maaf kro Me Please????
      </p>
      <div className="button-container">
        <button className='blue-button' onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="blue-button no-button"
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => {
            setTimeout(() => setShowImage(false), 5000);
          }}
          style={{
            backgroundImage: showImage
              ? `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZwb3dkeXZ0aXYxOXN2OHRvbDE2b3l3MDhqbmZzcXBscGhobXE5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Js77KmSnJPfSj9D5qj/giphy.gif')`
              : 'none',
            width: showImage ? '100%' : 'auto',
            height: showImage ? `${imageRef.current.clientHeight}px` : '50px',
            border: 'none',
            cursor: 'pointer',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          No
        </button>
      </div>

      {showYesImage && (
        <img
          src="https://media1.tenor.com/m/FZfcPyYj1r4AAAAC/peach-goma-goma-peach.gif"
          alt="Yes Image"
          style={{
            width: '50vw',
            height: '80vh',
            position: 'fixed',
            top: '10%',
            left: '25%',
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default Home;
