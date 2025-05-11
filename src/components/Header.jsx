import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SvgIcon from '@mui/material/SvgIcon';

const LogoIcon = (props) => (
  <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="SVMedia Logo" style={{ height: 36, width: 36, ...props.style }} />
);

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', background: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 56 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LogoIcon sx={{ fontSize: 36 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ fontWeight: 700 }}>
            SVMedia
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PhotoCameraIcon color="action" />
          <Typography variant="body1" color="text.secondary">
            Фотограф: Воронин Сергей
          </Typography>
          <WhatsAppIcon color="success" />
          <Typography variant="body1" color="text.secondary">
            Тел: +79147129830
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 