import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import hamburger from './assets/hamburger_menu.png'
import logo from './assets/logo_black.png'

function Nav({isMobile}) {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent={isMobile ? 'flex-end' :'space-between'}
      margin={isMobile ? null : '0 10px 120px 10px'}
    >
      {!isMobile && 
        <Box 
          component='img' 
          src={logo}
          height='48px'
          width='60px'
          alt='' 
          sx={{
            objectFit: 'contain'
          }}
        />
      }
      <Box 
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Typography
          fontFamily='Poppins-Medium'
          fontSize='12px'
          lineHeight='19px'
          letterSpacing='3px'
          color='#1e252c'
        >
          MENU
        </Typography>
        <Box
          marginLeft='13.5px'
          component='img'
          alt='Menu Button' 
          src={hamburger}
        />
      </Box>
    </Box>
  );
}

export default Nav;
