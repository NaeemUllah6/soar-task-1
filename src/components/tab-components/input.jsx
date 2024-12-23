const Inputs = ({
  label_for,
  labelText,
  inputType,
  placeholderText,
  value,
  onChange,
  options = [],
  name
}) => {
  return (
    <div className="flex flex-col gap-2">

      <label htmlFor={label_for} className="text-sm font-medium text-gray-700">
        {labelText}
      </label>

      {inputType === 'select' ? (
        <select
          required
          id={label_for}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full h-[50px] rounded-[15px] text-[#718EBF] px-3 py-2 text-[15px] bg-white border border-gray-300  shadow-sm focus:outline-none focus:border-black sm:text-sm"
        >

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ) : (
        <input
          required
          type={inputType}
          id={label_for}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholderText}
          className="block w-full h-[50px] rounded-[15px] px-3 py-2 placeholder:text-[#718EBF] text-[15px] bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      )}
    </div>
  );
};

export default Inputs;
