import { ChangeEvent, FunctionComponent } from 'react';
import { MyPropsSearch } from "../props/MyPropsSearch";

const SearchBar: FunctionComponent<MyPropsSearch> = (
  { searchText, onChangeSearch }): JSX.Element => {

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSearch(event);
  };

  return (
    <tr>
      <th>
        <input
          type="text"
          placeholder="Suche..."
          value={searchText}
          onChange={handleSearchChange} />
      </th></tr>
  );
}

export { SearchBar }