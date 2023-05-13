import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import apples from './assets/apples.png'

function About({isMobile}) {

  return (
    <Box
      display='flex'
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent='space-between'
      alignItems='center'
      margin={isMobile ? '0 0 49px 0' : '0 10px 103px 10px'}
    >
      <Box
        display='flex'
        flexDirection='column'
      >
        <Typography
          fontFamily='Eczar-SemiBold'
          fontSize={isMobile ? '99px' : '120px'}
          lineHeight='129px'
          color='#1e252c'
          sx={{
            WebkitTextStroke: `${isMobile ? '1px' : '1.5px'} #1e252c`,
            WebkitTextFillColor: 'transparent'
          }}
          zIndex='1'
          marginBottom={isMobile ? null : '-57px'}
        >
          About
        </Typography>
        <Box 
          component='img'
          src={apples}
          alt='' 
          width={isMobile ? '322px' : '701px'}
          height={isMobile ? '270px' : '493px'}
          boxShadow={`${isMobile ? '32px 36px' :'70px 65px'} #d8d8d8`}
          marginRight={isMobile ? '32px' : '70px'}
        />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignSelf={isMobile ? null : 'flex-end'}
        maxWidth={isMobile ? '665px' : '270px'}
        margin={isMobile ? null : '0 0 20px 15px'}
      >
        <Typography
          fontFamily='Poppins-SemiBold'
          fontSize={isMobile ? '24px' : '26px'}
          lineHeight={isMobile ? '35px' : '38px'}
          letterSpacing='0.46px'
          color='#1e252c'
          margin={isMobile ? '80px 0 24px 0' : ' 0 0 28px 0'}
        >
          Andy Griffith turned us down.
        </Typography>
        <Typography
          fontFamily='RobotoMono-Regular'
          fontSize={isMobile ? '18px' : '20px'}
          lineHeight={isMobile ? '28px' : '32px'}
          color='#4a4a4a'
          margin={isMobile ? '0 0 10px 0' : '0 0 0 0'}
        >
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
