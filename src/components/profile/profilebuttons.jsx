'use client'

import React, { useState } from 'react';

const ProfileBtn = ({ name }) => {
  const [buttonText, setButtonText] = useState(name);

  const handleClick = () => {
    setButtonText(prevText => (prevText === 'Follow' ? 'Followed' : 'Follow'));
  };

  return (
    <button 
      className='bg-btnWhite text-md text-black font-extrabold rounded-3xl px-5 py-1 transform focus:bg-green'
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default ProfileBtn;