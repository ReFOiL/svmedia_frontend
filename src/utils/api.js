const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const submitForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/codes/${formData.promocode}/use`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Ошибка при отправке формы');
    }

    // Получаем временные ссылки на скачивание
    const data = await response.json();
    
    if (!data.squad_archive || !data.total_archive) {
      throw new Error('Не удалось получить ссылки на скачивание');
    }

    // Открываем обе ссылки в новых вкладках
    window.open(data.squad_archive, '_blank');
    window.open(data.total_archive, '_blank');

    return { success: true };
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}; 