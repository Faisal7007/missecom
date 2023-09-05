import React ,{ useEffect }from 'react'
import './Keychains.scss'
const Keychains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='key'>Keychains</div>
  )
}

export default Keychains