import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = (serviceId: string, templateId: string, publicKey: string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      // As variáveis aqui devem bater com as variáveis ({{name}}, {{email}}, {{message}}) do seu Template no EmailJS
      const templateParams = {
        title: 'Nova Mensagem do Portfólio',
        name: data.name,
        from_name: data.name,
        email: data.email,
        reply_to: data.email,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.text || 'Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
    resetStatus,
  };
};
