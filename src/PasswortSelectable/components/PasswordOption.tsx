import { FunctionComponent} from 'react';
import { PasswordElement } from '../props/PasswordElement';

const PasswordOption:FunctionComponent<PasswordElement> =
 ({passwordElement}): JSX.Element => {

  const name = passwordElement.name;
  const wp = passwordElement.wp;
  const key = passwordElement.id

  const handleClick = (event: React.MouseEvent<HTMLTableElement>) => {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }

  return (
    <option label={name} key={key}>
      {name}: {wp}
    </option>    
  );
}

export {PasswordOption}