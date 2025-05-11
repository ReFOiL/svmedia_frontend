import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaceIcon from '@mui/icons-material/Place';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BlockIcon from '@mui/icons-material/Block';

const infoItems = [
  {
    icon: <SettingsIcon color="primary" fontSize="large" />,
    title: 'Настройте устройство',
    text: 'Перед использованием промокода, убедитесь, что ваш компьютер или интернет работает без перебоев.'
  },
  {
    icon: <PlaceIcon color="primary" fontSize="large" />,
    title: 'Подготовьте место',
    text: 'Весь содержимый материал будет весить около 15-20Гб, убедитесь, что на устройстве хватает места.'
  },
  {
    icon: <ConfirmationNumberIcon color="primary" fontSize="large" />,
    title: 'Промокод',
    text: 'Данный промокод является одноразовым, не пытайтесь его применять раньше даты, указанной на сертификате и не подготовив первые два пункта.'
  },
  {
    icon: <BlockIcon color="primary" fontSize="large" />,
    title: 'Отказ в тех. Поддержке',
    text: 'Правильно заполняйте поля с информацией перед вводом промокода, в случае неверных данных в тех.поддержке будет отказано.'
  },
];

export default function InfoSection() {
  return (
    <Box sx={{ background: '#fff', py: 4, px: { xs: 2, md: 6 }, borderRadius: 2, boxShadow: 1, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <InfoOutlinedIcon color="warning" fontSize="large" />
        <Typography variant="h6" fontWeight={700}>
          Информация обязательная к прочтению
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'space-between' }}>
        {infoItems.map((item, idx) => (
          <Box key={idx} sx={{ flex: '1 1 200px', minWidth: 200, maxWidth: 300 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {item.icon}
              <Typography variant="subtitle1" fontWeight={700}>{item.title}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 