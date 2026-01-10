import React from 'react';
import logo from '../../assets/welltimelogo-removebg-preview.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="WellTime Logo" style={{ height: '90px' }} />
      {/* If the logo image has text, we might not need extra text, but keeping it flexible */}
    </div>
  );
};

export default Logo;
