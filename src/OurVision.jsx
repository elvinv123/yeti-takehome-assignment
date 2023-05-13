import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function OurVision({isMobile}) {

  return (
    <Box
      display='flex'
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent='space-between'
      margin={isMobile ? '0 0 83.5px 0 ' : '0 0 239px 10px'}
      alignItems='center'
    >
      {isMobile &&
        <Typography
          fontFamily='Eczar-SemiBold'
          fontSize='73px'
          color='#1e252c'
          whiteSpace='nowrap'
          sx={{
            WebkitTextStroke: `${isMobile ? '0.8px' : '1px'} #1e252c`,
            WebkitTextStroke: '0.8px #1e252c',
            WebkitTextFillColor: '#fff'
          }}
        >
          Our vision
        </Typography>
      }
      <Box
        display='flex'
        flexDirection='column'
        width={isMobile ? null : '1070px'}
        alignSelf={isMobile ? null : 'flex-end'}
      >
        <Typography
          fontFamily='Poppins-SemiBold'
          fontSize={isMobile ? '24px' : '35px'}
          lineHeight={isMobile ? '35px' : '52px'}
          letterSpacing='0.46px'
          color='#1e252c'
          maxWidth='460px'
        >
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
        </Typography>
        <Typography
          fontFamily='RobotoMono-Regular'
          fontSize={isMobile ? '18px' : '20px'}
          lineHeight={isMobile ? '28px' : '32px'}
          color='#4a4a4a'
          marginTop={isMobile ? '24px' : '54px'}
          maxWidth='665px'
          alignSelf={isMobile ? null:'flex-end'}
        >
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.          
        </Typography>
      </Box>
      {!isMobile &&
        <Typography
          fontFamily='Eczar-SemiBold'
          fontSize='120px'
          lineHeight='129px'
          color='#1e252c'
          margin='0 0 0 135px'
          whiteSpace='nowrap'
          sx={{
            WebkitTextStroke: '1px #1e252c',
            WebkitTextFillColor: '#fff',
            writingMode: 'tb'
          }}
        >
          Our vision
        </Typography>
      }
    </Box>
  );
}

export default OurVision;
