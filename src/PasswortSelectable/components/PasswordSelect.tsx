import { ChangeEvent, ChangeEventHandler, FunctionComponent} from 'react';
import { Password } from '../../props/Password';
import { PasswordOption } from './PasswordOption';

interface SelectProps {  
  passwordList: Password[];
  searchText: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const PasswordSelect:FunctionComponent<SelectProps> =
 ({passwordList, searchText, onChange}): JSX.Element => {
  
  
  //useEffect(() => { console.log(passwordList[2].name); },[]);
  const options: JSX.Element[] = [];
  //const searchText = props.searchText;
  let anzahl: number = 0;
  passwordList.forEach((passwordElement) => {
    if (passwordElement.name.indexOf(searchText) === -1) {
      return;
    }
    options.push(<PasswordOption passwordElement={passwordElement} />);
    anzahl = anzahl + 1;
  });

  return (
    <label>Auswahl:
    <select size={anzahl} onChange={onChange}>
      {options}
    </select>
    </label>
  );
}

export {PasswordSelect};