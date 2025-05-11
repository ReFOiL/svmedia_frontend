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

    // Получаем временную ссылку на скачивание
    const data = await response.json();
    
    if (!data.download_url) {
      throw new Error('Не удалось получить ссылку на скачивание');
    }

    // Открываем ссылку в новой вкладке
    window.open(data.download_url, '_blank');

    return { success: true };
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}; 