const Input = ({ id, label, type, value, onChange }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border h-10"
        aria-label={label}
      />
    </div>
  );
};

export default Input;
