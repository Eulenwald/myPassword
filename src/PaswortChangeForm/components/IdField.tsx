import { FunctionComponent, ReactElement } from "react"
import { IdFieldProps } from "../props/IdField"

const IdField:FunctionComponent<IdFieldProps> = (
  {title, value, name}):ReactElement => {
  
  return (
  <label>UUID: {value}</label>
  )
}

export {IdField}