import { CheckCircle } from "lucide-react";

interface Props {
  message: string;
  show: boolean;
}
export const Toast = ({ message, show }: Props) => {
  return (
    <div
      className={`fixed bottom-5 right-5 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-3
        ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <CheckCircle className="w-5 h-5 text-green-400" />
      {message}
    </div>
  );
};
