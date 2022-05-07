import React, { ChangeEvent, FunctionComponent, ReactElement, useEffect, useState } from 'react';
import './App.css';
import { Tab, TabController } from './components/tabs';
import { SearchablePasswordContainer } from './PasswortSelectable/SearchablePasswordContainer';
import { ChangePasswordContainer } from './PaswortChangeForm/ChangePasswordContainer';
import { Password } from './props/Password';

const PASSWORDS = [
  { "id":"0eadc7e9-d8e3-4aa1-86cb-d5adf907ac5a","name":"name1","ip":"https://www.goolge.de","user_name":"","wp":"w1", "description":"", "date":"11.01.2020","date_of_change":"17.03.2022"},
  { "id":"2e55a31d-faf8-4098-8709-b964103d96db","name":"name2","ip":"https://www.goolge.de","user_name":"","wp":"w2", "description":"", "date":"12.02.2020","date_of_change":"17.03.2022" },
  { "id":"7d9dda5d-328d-4920-bd6f-bc33c7b293e5","name":"name3","ip":"https://www.goolge.de","user_name":"","wp":"w3", "description":"", "date":"13.03.2020","date_of_change":"17.03.2022" },
  { "id":"7f651c6f-aeca-40d2-831a-f2ea2e3c73a1","name":"name4","ip":"https://www.goolge.de","user_name":"","wp":"w4", "description":"", "date":"14.04.2020","date_of_change":"17.03.2022" },
  { "id":"9a0a24ba-5894-4113-a284-6d5e0da66862","name":"name5","ip":"https://www.goolge.de","user_name":"","wp":"w5", "description":"", "date":"15.05.2020","date_of_change":"17.03.2022" },
  { "id":"9ae64d09-0f03-4a0c-8848-439e94eb14ce","name":"name6","ip":"https://www.goolge.de","user_name":"","wp":"w10","description":"", "date":"16.06.2020","date_of_change":"17.03.2022" }
];

const emptyPW:Password = {
  "id":"",
  "name":"",
  "ip":"",
  "user_name": "",
  "wp":"",
  "description":"", 
  "date":"",
  "date_of_change":""
}

const testPW:Password = {
  "id":"asdasd",
  "name":"Dummylein",
  "ip":"here",
  "user_name":"Ich",
  "wp":"pwaaa",
  "description":"", 
  "date":"",
  "date_of_change":""
}

const App: FunctionComponent = (props): ReactElement => {
  const [ passwords, setPasswords ] = useState<Password[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  let[activePassword, setActivePassword] = useState<Password>({...emptyPW});  
  useEffect(() => {setActivePassword(emptyPW)},[]);
  
  /** Das leere array [] am Ende von useEffect sorgt dafür, 
   *  dass useEffect nur einmalig ausgeführt wird!
   * 
   *  Die Ip-Adresse 192.... ist notwendig um zum Testen von Geräten,
   *  aus den LAN, auf Auf die Anwendung zu zugereifen.
   * 
   *  Die return-Rückgabe als function dient zur ausführung einer
   *  ComponentWillUnmount fünktionalität.
  */
  /* useEffect(() => {
    fetch('http://192.168.178.20:3002/passwordElement').
      then(async (response: Response): Promise<Password[]> => response.json()).
      then(async (loadedPasswords: Password[]): Promise<void> => {
        setIsLoading(false);
        setPasswords(loadedPasswords);
      });
    return () => { };
  }, []);
 */
 // if (isLoading) { return ( <main>Lade Liste...</main> ); }

  const handleSearchChange = (password: Password):void => {
    setActivePassword(password);
  }

  return (
    <div className="App">
      <TabController>      
        <Tab headline="Suche">
          <SearchablePasswordContainer onChangeActivePassword={handleSearchChange} passwordList={PASSWORDS} />
        </Tab>
        <Tab headline='Neues Passwort'>
          <ChangePasswordContainer activePassword={activePassword}/>
        </Tab>
      </TabController>
    </div>
  );
}

//export { App };
export default App;
