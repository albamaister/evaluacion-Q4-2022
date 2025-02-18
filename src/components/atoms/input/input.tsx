import { FC } from 'react'
import { GiftProps } from '../../../utils/interfaces'
import './input.scss'

export interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
  label?: string
  errorMessage?: string
  variant?: 'error' | 'normal'
  value?: string
  name?: keyof GiftProps
  disabled?: boolean
  onChange: (value: string, name?: keyof GiftProps) => void
}

export const Input: FC<InputProps> = ({
  placeholder,
  label = '',
  type,
  errorMessage,
  variant,
  onChange,
  value,
  name,
  disabled = false
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        disabled={disabled}
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value, name)}
        className={`input__field ${variant === 'error' ? 'input__field--error' : ''}`}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  )
}
