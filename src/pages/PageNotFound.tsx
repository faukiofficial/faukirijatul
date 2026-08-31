import { RiErrorWarningLine } from 'react-icons/ri';

export function PageNotFound() {
  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center gap-4">
      <RiErrorWarningLine className="mx-auto text-[6rem] text-red-500" />
      <h3 className="text-2xl font-semibold text-gray-900">Oopps</h3>
      <p className="">Page Not Found</p>
    </div>
  );
}
