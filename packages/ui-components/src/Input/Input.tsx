import * as React from "react"
import glamorous from "glamorous"

type Props = {
  className?: string
  placeholder?: string
  name?: string
  value: string
  onChange?: (newVal: string) => void
  children?: string
}

type StyleProps = {
  theme: Theme
}

const StyledInput = glamorous.input(({ theme }: StyleProps) => ({
  padding: theme.spacing / 2,
  border: "1px solid",
  borderColor: theme.colors.grey30,
  font: "inherit",
  WebkitAppearance: "none"
}))

const Input: React.SFC<Props> = ({ className, name, placeholder, value, onChange }) => {
  return (
    <StyledInput
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => {
        onChange(e.target.value)
      }}
    />
  )
}

export default Input