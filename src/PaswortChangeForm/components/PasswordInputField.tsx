import { ChangeEvent, FunctionComponent, ReactElement } from "react"
import { NameFieldProps } from "../props/NameField"

const PasswordInputField:FunctionComponent<NameFieldProps> = (
  {title, value, name, onChangeText}):ReactElement => {
  
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {    
    onChangeText(event);
  };
  
  /** null werte abfangen */
  let rvalue:string = ""; if(value) rvalue = value;
  return (
  <label>{title}:
    <input 
      type="password" 
      name={name} 
      value={ rvalue } 
      onChange={ handleInput } />
  </label>
  )
}

export {PasswordInputField}