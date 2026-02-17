interface InputFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

export const InputField = ({
  icon,
  label,
  value,
  disabled,
  onChange,
}: InputFieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
        {icon}
        {label}
      </div>

      <input
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-900 disabled:opacity-70"
      />
    </div>
  );
};
