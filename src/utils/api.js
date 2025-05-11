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

    // Получаем HTML-страницу для скачивания
    const htmlContent = await response.text();
    
    // Создаем новую вкладку с HTML-страницей
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');

    return { success: true };
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}; 