import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import pyramid from './assets/pyramid.png'

function OurValues({isMobile}) {

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box 
        component='img'
        alt='' 
        src={pyramid}
        width={isMobile ? '327px' : '1074px'}
        height={isMobile ? '174px' : '571px'}
        boxShadow={`${isMobile ? '-27px -25px' :'-90px -83px'} #ebe9ea`}
        marginLeft={isMobile ? '27px' : '80px'}
      />
      <Typography
        margin={isMobile ? '72px 0 10px 0' : '-93px 0 68px 0'}
        fontFamily='Eczar-SemiBold'
        fontSize={isMobile ? '73px' : '120px'}
        color='#1e252c'
        whiteSpace='nowrap'
        sx={{
          WebkitTextStroke: `${isMobile ? '0.8px' : '1.5px'} #1e252c`,
          WebkitTextFillColor: 'transparent'
        }}
      >
        Our values
        </Typography>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography
          fontFamily='Poppins-SemiBold'
          fontSize={isMobile ? '22px' : '35px'}
          lineHeight={isMobile ? '35px' : '52px'}
          letterSpacing='0.46px'
          color='#1e252c'
          textAlign='center'
          maxWidth={isMobile ? '665px' : '701px'}
          marginBottom={isMobile ? '40px' : '92px'}
        >
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
        </Typography>
        <Box
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
        >
          <Typography
            fontFamily='RobotoMono-Regular'
            fontSize={isMobile ? '16px' : '20px'}
            lineHeight={isMobile ? '28px' : '32px'}
            color='#4a4a4a'
            maxWidth={isMobile ? '665px' : '560px'}
            margin={isMobile ? '0 0 27px 0' : '0 40px 0 0'}
          >
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.
          </Typography>
          <Typography
            fontFamily='RobotoMono-Regular'
            fontSize={isMobile ? '16px' : '20px'}
            lineHeight={isMobile ? '28px' : '32px'}
            color='#4a4a4a'
            maxWidth={isMobile ? '665px' : '560px'}
          >
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OurValues;
