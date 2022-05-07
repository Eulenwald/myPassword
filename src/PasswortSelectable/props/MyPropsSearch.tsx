import { ChangeEventHandler } from "react";

export interface MyPropsSearch {
  searchText: string;
  onChangeSearch: ChangeEventHandler<HTMLInputElement>
}
