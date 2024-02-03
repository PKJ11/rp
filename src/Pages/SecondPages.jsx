import React, { useState, useEffect,useRef } from "react";
import song from "../assests/song2.mp3"
const SecondPages = () => {
  const [showContent, setShowContent] = useState(1);
  const [showSong, setShowSong] = useState(false);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    audioRef.current.play();
  };
  useEffect(() => {
    
    setShowSong(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
    const firstTimeout = setTimeout(() => {
      setShowContent(2);
      
    }, 10000); // 10 seconds
    const secondTimeout = setTimeout(() => {
      setShowContent(3);
    }, 20000); 
    const thirdTimeout = setTimeout(() => {
      setShowContent(4);
    }, 30000);

    const fourthTimeout = setTimeout(() => {
      setShowContent(5);
    }, 40000);

    // Clear the timeouts to prevent memory leaks
    return () => {
      
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      clearTimeout(thirdTimeout);
      clearTimeout(fourthTimeout);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", minHeight: "100vh" }}>
          
      {/* Top Left */}
      <img
        src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
        alt="Love You"
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "100px",
          height: "100px",
          zIndex: 1000,
        }}
      />
      {/* Top Right */}
      <img
        src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
        alt="Love You"
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "100px",
          height: "100px",
          zIndex: 1000,
        }}
      />
      {/* Bottom Left */}
      <img
        src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
        alt="Love You"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "100px",
          height: "100px",
          zIndex: 1000,
        }}
      />
      {/* Bottom Right */}
      <img
        src="https://media.tenor.com/xDpeMcJaI1kAAAAi/love-you.gif"
        alt="Love You"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "5%",
          width: "100px",
          height: "100px",
          zIndex: 1000,
        }}
      />
      <img
        src="https://media.tenor.com/L1Gw1tbsCSMAAAAi/tkthao219-bubududu.gif"
        alt="Love You"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "45%",
          width: "100px",
          height: "100px",
          zIndex: 1000,
        }}
      />

      {/* first content */}
      {showContent === 1 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://media1.tenor.com/m/71u5Jfc8RsQAAAAC/milk-and-mocha-bears.gif"
            alt="Milk and Mocha Bears"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Hellooo meri pyari Rishitaa... sunnonaaa Bacchaa meraaa
          </p>
        </div>
      )}
      {/* second content */}
      {showContent === 2 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://media1.tenor.com/m/5t-iIxnzE8MAAAAC/sad-bear-cry.gif"
            alt="Milk and Mocha Bears"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <p style={{ fontSize: "20px", marginTop: "10px", width: "300px" }}>
            Soory Bacchaa Bhtt Jyada Hurt Kar Diya na mene Apne bacche
            Ko..Kukuss Sooryy Yarrr Abse sachii wala Try Karunga na ..Plss
            Kukuss khuss hojaa .. Ese nhi achii dikhti hai tu ...Haste hue na
            mast lagi haiii. ekdum Rapchik...
          </p>
        </div>
      )}
      {/* third content */}
      {showContent === 3 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://media1.tenor.com/m/yYKgHmYQMBIAAAAC/mocha-bear-mocha-kiss.gif"
            alt="Milk and Mocha Bears"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <p style={{ fontSize: "20px", marginTop: "10px", width: "300px" }}>
            Kukkuusss paakkka wadaa Yarrr .. Aur pareshaannn nhi karungaaa...Phele ke jesa hi lagega tujhe sachhiiii mee bacchhaa...
            Me na Is baar sab Thik kar dunga na Bacchaa... Ab Hum doonooo hameshaaa khushh rahenge na bachaaa ...

          </p>
        </div>
      )}
      {/* fourth  content */}
      {showContent === 4 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://media.tenor.com/5w9WJfI-N3sAAAAi/tkthao219-bubududu.gif"
            alt="Milk and Mocha Bears"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <p style={{ fontSize: "20px", marginTop: "10px", width: "300px" }}>
            Lekin tuu bhi baccahhaa promise kar Ache se padhegiii ..Acha Sochegiii..Positive rahegiii.. sab achaa hi hogaaa bachhaaa...
            Alll The very Best mera billluuu.....Pyara saaaaa chhootooo kukusss...Parashaan matt hooo itna padhne me... sab ho jayega..
          </p>
        </div>
      )}
      {/* fourth  content */}
      {showContent === 5 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://media1.tenor.com/m/9OJSIsH9giAAAAAC/zaira-asim-zaira.gif"
            alt="Milk and Mocha Bears"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              margin: "20px",
            }}
          />
          <p style={{ fontSize: "20px", marginTop: "10px", width: "300px" }}>
            Hummm donooo Bht khusss rahege bachha sathhh mee tu tension na lee.. Ese hi hum dono ki shadi hogii..Hamesha sathh me khush rahenge merii billiiii....I Love U a lottttt .....I willl try my best to prove my loveee..meri sherniiiii.....
          </p>
        </div>
      )}
      {showSong && (
        <audio ref={audioRef} autoPlay>
          <source src={song} type="audio/mp3" />
        </audio>
      )}
      <button onClick={handlePlayAudio}>Play Audio</button>
    
    </div>
  );
};

export default SecondPages;
