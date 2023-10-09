import React from 'react'
import '../routes/css/Slideshow.css'
import Image1 from '../assets/electrical-services-IMG/borehole-pump.jpg'
import Image2 from '../assets/electrical-services-IMG/electricians-1.jpg'
import Image3 from '../assets/electrical-services-IMG/Motor-Gate-Banner.jpg'
import AccessC from '../assets/electrical-services-IMG/access-control-2.jpg'
import AlarmS from '../assets/electrical-services-IMG/alarm-system.jpg'
import SwimmingP from '../assets/electrical-services-IMG/best-swimming-pool-pump.jpg'
import EleFence from '../assets/electrical-services-IMG/ele-fence.jpg'
import IntercomS from '../assets/electrical-services-IMG/intercom-system-2.jpg'
import { FaIntercom } from "react-icons/fa6"
import PowerB from '../assets/electrical-services-IMG/power-back-up.jpg'
import securityC from '../assets/electrical-services-IMG/garden-security-camera.jpg'
import GeyserS from '../assets/electrical-services-IMG/geyser3.jpg'

// const a = <img src = {Image1} alt="ele"/>
// const b = <img src = {Image2} alt="ele"/>
// const c = <img src = {Image3} alt="ele"/>

// const colors = [<img src = {Image1} alt="ele"/>, <img src = {Image2} alt="ele"/>, <img src = {Image3} alt="ele"/>];
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors=["r","h","j"]
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
