import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();

  const onSubmit = async () => {
    try {
      error && setError(undefined);
      setIsLoading(true);
      const resp = await fetch(
        'https://formsubmit.co/ajax/ovalentindev@gmail.com',
        {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      if (!resp.ok) {
        throw new Error('Fail to send message');
      }

      setIsSuccess(true);
      setForm(initialState);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return {
    ...form,
    form,
    isLoading,
    error,
    isSuccess,
    onSubmit,
    onChange,
  };
};
