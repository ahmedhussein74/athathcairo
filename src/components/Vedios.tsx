import React from "react";

const Vedios = () => {
  return (
    <div className="py-12 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
      <video className="" controls>
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video className="" controls>
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video className="" controls>
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Vedios;
