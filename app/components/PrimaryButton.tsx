const PrimaryButton = ({
  label = 'Submit',
  className = '',
  onClick = () => {},
  type = 'button',
} : ButtonProps ) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} mt-5 w-full p-5 bg-green-600 text-white hover:bg-green-700 transition duration-300`}
    >
      {label}
    </button>
  )
}

export default PrimaryButton