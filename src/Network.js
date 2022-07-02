import { useEffect, useState } from "react";
// import "./styles.css";
// import $ from 'jquery';

function Network() {
  const [bps, setBps] = useState("");
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().getTime();
            const bps = Math.round(Math.random() * 100);
            setBps(bps);
            setEndTime(time);
        }, 1000)
        return () => clearInterval(interval);
    },[]);
    var userImageLink =
    "https://wallpaperaccess.com/full/3949082.png";
  var downloadSize = 5616998;
  var downloadImgSrc = new Image();
    
   downloadImgSrc.onload = function () {
    console.log("I am called");
      setEndTime(new Date().getTime());
      setStartTime(startTime);
      Network();

    };
    downloadImgSrc.src = userImageLink;
    const Network = () => {
      var timeDuration = (endTime - startTime) / 1000;
      var loadedBits = downloadSize * 8;
      setBps((((loadedBits / timeDuration)/1024)/1024).toFixed(2));
    };
  return (
  <>
 
  <p id="speed">Network Bandwidth:{bps}Mbps</p>
 
  </>
  );
}

export default Network;