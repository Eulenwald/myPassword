import { ChangeEvent, FunctionComponent, ReactElement, useState } from "react"
import { ChangePasswordFormProps } from "./props/ChangePasswordForm"
import { IdField } from "./components/IdField"
import { NameField } from "./components/NameField"
import { TextField } from "./components/TextField"
import { PasswordInputField } from "./components/PasswordInputField"

const ChangePasswordContainer:FunctionComponent<ChangePasswordFormProps> =
 ({activePassword}): ReactElement => {

  const [passwordName, setPasswordName] = useState<string>(activePassword.name);
  const [passwordIp, setPasswordIp] = useState<string | null>(activePassword.ip);
  const [passwordValue, setPasswordValue] = useState<string>(activePassword.wp);
  const [passwordDescription, setPasswordDescription] = useState<string |null>(activePassword.description);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const src = event.target.name;    
    if(src === 'dName') setPasswordName(event.target.value);
    if(src === 'dIp') setPasswordIp(event.target.value);
    if(src === 'dPassword') setPasswordValue(event.target.value);
    if(src === 'dDiscription') setPasswordDescription(event.target.value);
  }

  return (
    <form action="http://192.168.178.20:3002/new-jason" method="POST" encType="text/jason">
      <IdField key="a" title="Id" name="dId" value={activePassword.id} />
      <NameField key="b" onChangeText={handleChange} title="Name" name="dName" value={passwordName} />
      <NameField key="c" onChangeText={handleChange} title="IP" name="dIp" value={passwordIp} />
      <PasswordInputField  key="d" onChangeText={handleChange} title="Passwort" name="dPassword" value={passwordValue} />
      <TextField key="e" onChangeTextArea={handleChange} title="Beschreibung" name="dDiscription" value={passwordDescription} />
      <button>submit</button>
    </form>
  )
}

export {ChangePasswordContainer};