import React, { MouseEvent, ChangeEvent, FunctionComponent, ReactElement, useState } from 'react';

import { SearchBar } from "./components/SearchBar";
import { MyProps } from './props/MyProps';
import { PasswordTr } from './components/PasswordTr';
import { Password } from '../props/Password';

interface ContainerProps {
  passwordList: Password[];
  onChangeActivePassword: Function
}

const SearchablePasswordContainer:FunctionComponent<ContainerProps> =
 ({passwordList, onChangeActivePassword}): ReactElement => {

  const rows: JSX.Element[] = [];
  
  const [searchText, setSearchText] = useState<string>("");
  
  const handleOnButtonClick = (event: MouseEvent<HTMLButtonElement>):void => {
      
    const button: HTMLButtonElement = event.currentTarget;
    //alert(button.name);
    /**
     * Todo
     * Anhand des name.atr (UUID) wird das Element aus der Liste, eine Ebene
     * höher zum aktiven Passwort.
     */
     passwordList.forEach((passwordElement) => {
      if (passwordElement.id === button.name) {
        onChangeActivePassword(passwordElement);
      }
      //rows.push(<PasswordTr onButtonClick={handleOnButtonClick} passwordElement={passwordElement} />);
    });
} 

  passwordList.forEach((passwordElement) => {
    if (passwordElement.name.indexOf(searchText) === -1) {
      return;
    }
    rows.push(<PasswordTr onButtonClick={handleOnButtonClick} passwordElement={passwordElement} />);
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setSearchText(event.target.value);
    //return {searchText: searchText}    
  } 

   return (
     <React.Fragment>
       <table>
         <thead>
           <SearchBar
             searchText={searchText}
             onChangeSearch={handleSearchChange} />
         </thead>

         <tr><td><table>
           <thead><tr><th>App-Name</th><th>IP-Adresse</th><th>Benutzername</th><th>Passwort</th><th> </th><th> </th></tr></thead>
           <tbody>{rows}</tbody>
         </table></td></tr>
       </table>
     </React.Fragment>
   );
 }

export {SearchablePasswordContainer};