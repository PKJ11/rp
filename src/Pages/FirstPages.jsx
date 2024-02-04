import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import video1 from "../assests/vido1.mp4";
import thirdGif from "../assests/soory.gif";
import './Home.css';
import './firstPage.css';
import song from "../assests/song.mp3";
import { useNavigate } from 'react-router-dom';

const FirstPages = () => {
  
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(true);
  const [showSecondGif, setShowSecondGif] = useState(false);
  const [showThirdGif, setShowThirdGif] = useState(false);
  const [showSong, setShowSong] = useState(false);
  const videoDuration = 64; // Set the duration in seconds

  const handleProgress = ({ playedSeconds }) => {
    // Check if the video has played for the specified duration and stop playing
    if (playedSeconds >= videoDuration) {
      setPlaying(false);
      setShowSecondGif(true);
      setShowSong(true);
      setTimeout(() => {
        navigate('/LovePage2');
      }, 62000);
      // Show the third gif after 6 seconds (total 70 seconds)
      setTimeout(() => {
        setShowSecondGif(false);
        setShowThirdGif(true);
        // Start playing the song after 64 seconds
      }, 20000);
    }
  };

  const handleEnded = () => {
    // Restart the video when it ends
    setPlaying(true);
    setShowSecondGif(false);
    setShowThirdGif(false);
    setShowSong(false);
  };

  useEffect(() => {
    // Reset the playing state after 60 seconds
    const timeoutId = setTimeout(() => {
      setPlaying(true);
      setShowSecondGif(false);
      setShowThirdGif(false);
      setShowSong(false);
    }, videoDuration * 1000);

    return () => clearTimeout(timeoutId);
  }, [playing]);

  return (
    <div className="video-background">
      <ReactPlayer
        url={video1}
        playing={playing}
        loop={false}
        muted={false}
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
      <div className="content-overlay">
        {/* Top Left */}
        <img
          src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
          alt="Love You"
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            width: '100px', // Set the width as per your requirement
            height: '100px', // Set the height as per your requirement
            zIndex: 1000,
          }}
        />
        {/* Top Right */}
        <img
          src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
          alt="Love You"
          style={{
            position: 'absolute',
            top: '5%',
            right: '5%',
            width: '100px', // Set the width as per your requirement
            height: '100px', // Set the height as per your requirement
            zIndex: 1000,
          }}
        />
        {/* Bottom Left */}
        <img
          src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
          alt="Love You"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '100px', // Set the width as per your requirement
            height: '100px', // Set the height as per your requirement
            zIndex: 1000,
          }}
        />
        {/* Bottom Right */}
        <img
          src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
          alt="Love You"
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '5%',
            width: '100px', // Set the width as per your requirement
            height: '100px', // Set the height as per your requirement
            zIndex: 1000,
          }}
        />

        {showSecondGif && (
          <img
            src="https://media1.tenor.com/m/_bEzqToo5MkAAAAC/sorry-love.gif"
            alt="Sorry Love"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50vw', // Set the width as per your requirement
              height: '80vh', // Set the height as per your requirement
              zIndex: 1000,
            }}
          />
        )}

        {showThirdGif && (
          <img
            src={thirdGif}
            alt="Kiss Love"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50vw', // Set the width as per your requirement
              height: '80vh', // Set the height as per your requirement
              zIndex: 1000,
            }}
          />
        )}

        {showSong && (
          <audio autoPlay>
            <source src={song} type="audio/mp3" />
          </audio>
        )}
      </div>
    </div>
  );
};

export default FirstPages;
