import { ChangeEventHandler } from "react";

interface NameFieldProps {
  title: string,
  name: string,
  value: string | null,
  //onChangeText: (searchText: string) => void
  onChangeText: ChangeEventHandler<HTMLInputElement>;
}

export {NameFieldProps};
