import React from "react";
import Image from "next/image";
import './components.css'

const AnimatedWaves = () => {
    return (
      <div className="w-full animated-waves-wrapper absolute left-0 z-0">
        <div className="waves h-[550px] w-[3200px] relative ">
          <Image
            src="/wawes.webp"
            alt="wave"
            width={5690}
            height={100}
            className="absolute w-[5690px] max-h-[550px] select-none"
          />
        </div>
      </div>
    );
};

export default AnimatedWaves;
