import { useState } from "react"

export default function useField(initialValue) {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: any) => typeof e === 'string' ? setValue(e) : setValue(e.target.value)

  return { value, onChange }

}