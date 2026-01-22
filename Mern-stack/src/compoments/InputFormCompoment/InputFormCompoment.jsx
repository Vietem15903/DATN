import { Input } from 'antd'

const InputFormCompoment = (props) => {
  const {placeholder = 'Nhap text', ...rest} = props
  
  return (
        <Input placeholder={placeholder} valueinput = {props.value} {...rest}  />
  )
}

export default InputFormCompoment
