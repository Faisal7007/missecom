import React, { useEffect } from 'react';
import './Mobilecovers.scss';

const MobileCovers = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mobcover'>
      MobileCovers
    </div>
  );
};

export default MobileCovers;