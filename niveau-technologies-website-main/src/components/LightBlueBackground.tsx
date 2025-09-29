import React from "react";

const LightBlueBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="relative overflow-hidden bg-blue-50">
    {/* SVG Blob/Wave Background */}
    <svg
      className="absolute top-0 left-0 w-full h-64 md:h-96 pointer-events-none"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 0 }}
    >
      <path
        fill="#e3f2fd"
        fillOpacity="1"
        d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,186.7C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default LightBlueBackground;
