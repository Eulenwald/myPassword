import { ChangeEventHandler, EventHandler, FunctionComponent, MouseEvent, MouseEventHandler} from 'react';
import { Password } from '../../props/Password';
import { PasswordElement } from '../props/PasswordElement';

interface PasswordElementRow {
  passwordElement: Password;
 // onSelectPw: MouseEvent<HTMLButtonElement>
  onButtonClick: Function
}

const PasswordTr:FunctionComponent<PasswordElementRow> =
 ({passwordElement,onButtonClick}): JSX.Element => {

  const name = passwordElement.name;
  const wp = passwordElement.wp;
  const key = passwordElement.id
 
  const handleOnButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

//    const button: HTMLButtonElement = event.currentTarget;
    onButtonClick(event);
  };
  return (
    <tr key={key}>
      <td>{name}</td>
      <td>{passwordElement.ip}</td>
      <td>{passwordElement.user_name}</td>
      <td>{wp}</td>
      <td></td>
      <td><button name={key} onClick={handleOnButtonClick}>bearbeiten</button></td>
    </tr>
  );
}

export {PasswordTr}