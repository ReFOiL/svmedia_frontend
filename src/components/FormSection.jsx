import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { submitForm } from '../utils/api';
import { Alert, Snackbar } from '@mui/material';

export default function FormSection() {
  const [form, setForm] = React.useState({
    name: '',
    surname: '',
    shift: '',
    group: '',
    promocode: '',
    agree: false,
  });

  const [loading, setLoading] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitForm(form);
      setSnackbar({
        open: true,
        message: 'Архивы успешно открыты для скачивания!',
        severity: 'success',
      });
      // Очищаем форму после успешной отправки
      setForm({
        name: '',
        surname: '',
        shift: '',
        group: '',
        promocode: '',
        agree: false,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || 'Произошла ошибка при скачивании архива',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, borderRadius: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Имя (Ребёнка)"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          label="Фамилия (Ребёнка)"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          label="Смена"
          name="shift"
          value={form.shift}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          label="Отряд"
          name="group"
          value={form.group}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          label="Промокод"
          name="promocode"
          value={form.promocode}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ required: false }}
        />
        <FormControlLabel
          control={<Checkbox name="agree" checked={form.agree} onChange={handleChange} inputProps={{ required: true }} />}
          label={<Typography variant="body2">Я согласен с правилами сервиса</Typography>}
          required={false}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="warning" 
          fullWidth 
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Скачивание...' : 'Скачать'}
        </Button>
      </form>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
} 