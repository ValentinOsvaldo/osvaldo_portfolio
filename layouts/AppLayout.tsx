import { Navbar } from '@/components/ui';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="m-auto w-full max-w-screen-xl">{children}</main>
      <footer className="flex flex-col gap-2 py-6">
        <p className="text-gray-700 dark:text-gray-400 font-mono text-center text-sm">
          Designed and created by Osvaldo Valentin
        </p>
      </footer>
    </>
  );
};
