import { useState } from "react";

interface TextInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, onChange } : TextInputProps) => {
  const [currentValue, setCurrentValue] = useState(value)

  return (
    <div className='w-full mt-5'>
      <input
        type='text'
        className='w-full border border-gray-300 rounded p-5'
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder={label}
      />
    </div>
  )
}

export default TextInput