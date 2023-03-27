import { Input } from './';
import { useForm } from '../../hooks/useForm';

export const Form = () => {
  const {
    email,
    name,
    subject,
    isLoading,
    error,
    isSuccess,
    onChange,
    onSubmit,
  } = useForm({
    name: '',
    email: '',
    subject: '',
  });

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <form
      className="flex flex-col gap-4 md:items-end bg-slate-900 p-4 rounded-md shadow-sm"
      onSubmit={onSubmitForm}
    >
      <h3 className="text-2xl text-teal-500 font-bold w-full block">
        Leave a message
      </h3>

      <Input
        id="name"
        label="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <Input
        id="email"
        label="Email"
        name="email"
        value={email}
        onChange={onChange}
        type="email"
        required
      />
      <Input
        id="subject"
        label="Subject"
        name="subject"
        value={subject}
        onChange={onChange}
        type="text"
        required
      />

      {!!error && (
        <div className="bg-red-500 text-white transition-all w-full p-2 rounded-md font-medium[">
          { JSON.stringify(error) }
        </div>
      )}

      {isSuccess && (
        <div className="bg-teal-500 text-black transition-all w-full p-2 rounded-md font-medium[">
          Submit successfully!
        </div>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-teal-700 text-white font-medium rounded-md inline-flex justify-center items-center text-center gap-2"
        disabled={isLoading}
      >
        {isLoading && (
          <span className="rounded-full border-2 inline-block w-4 h-4 border-white border-b-transparent animate-spin"></span>
        )}
        Submit
      </button>
    </form>
  );
};
