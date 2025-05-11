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

    // Получаем blob с архивом
    const blob = await response.blob();
    
    // Создаем ссылку для скачивания
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shift_${formData.shift}_squad_${formData.group}.zip`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    return { success: true };
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}; 