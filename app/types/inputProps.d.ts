interface InputProps {
  label?: string
  className?: string
}

interface TextInputProps extends InputProps {
  value?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface ButtonProps extends InputProps {
  type?: 'submit' | 'button' | 'reset'
  color?: string
  hoverColor?: string
  onClick?: () => void
}