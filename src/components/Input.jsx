import { useState } from 'react'

import uniqid from 'uniqid'

export default function Input({
  id = uniqid(),
  type,
  placeholder,
  data,
  handleChange,
  setter,
  custom = '',
}) {
  const [inputValue, setInputValue] = useState('')
  return (
    <input
      className={`w-full text-xl py-2 px-4 rounded-lg ${custom}`}
      type={type}
      id={id}
      placeholder={placeholder}
      value={data === undefined ? inputValue : data}
      onChange={(e) => {
        handleChange(e, setter === undefined ? setInputValue : setter)
      }}
    />
  )
}
