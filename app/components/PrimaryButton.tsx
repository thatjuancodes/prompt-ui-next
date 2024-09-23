interface InputProps {
  label?: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  label = 'Submit',
  className,
  onClick,
}: InputProps ) => {
  return (
    <button onClick={onClick} className={`${className} mt-5 w-full p-5 bg-green-600 text-white hover:bg-green-700 transition duration-300`}>
      {label}
    </button>
  )
}

export default PrimaryButton