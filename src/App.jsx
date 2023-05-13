import React, {useEffect, useState} from 'react'
import Nav from './Nav';
import About from './About';
import OurVision from './OurVision'
import OurValues from './OurValues';
import Box from '@mui/material/Box';

function App() {

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1050px)').matches)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1050px)').matches)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <Box
      display='flex'
      flexDirection='column'
      maxWidth='1260px'
      padding='0 30px'
      overflow={isMobile ? null : 'hidden'}
      margin={isMobile ? '27px 0 134px 0' : '27px auto 134px auto'}
    >
      <Nav isMobile={isMobile}/>
      <About isMobile={isMobile}/>
      <OurVision isMobile={isMobile}/>
      <OurValues isMobile={isMobile}/>
    </Box>
  );
}

export default App;
