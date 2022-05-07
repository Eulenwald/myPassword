import { ChangeEvent, ChangeEventHandler, FunctionComponent, ReactElement } from "react"


interface TextFieldProps {
  title: string,
  name: string,
  value: string | null,
  //onChangeText: (searchText: string) => void
  onChangeTextArea: ChangeEventHandler;
}

const TextField:FunctionComponent<TextFieldProps> = (
  {title, value, name, onChangeTextArea}):ReactElement => {
  
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {    
    onChangeTextArea(event);
  };
  
  /** null werte abfangen */
  let rvalue:string = ""; if(value) rvalue = value;
  return (
  <label>{title}:
    <textarea       
      name={name} 
      value={ rvalue } 
      onChange={ handleInput } />
  </label>
  )
}

export {TextField}