import React from "react";
import styles from "./Select.module.scss";

export interface IOptions {
  label: string;
  value: number;
}

interface ISelect {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  defaultValue: number;
  options: IOptions[];
  customStyleClass?: string;
}
const Select = (props: ISelect): JSX.Element => (
  <select
    role="combobox"
    className={`${styles.select} ${
      props.customStyleClass ? props.customStyleClass : ""
    }`}
    data-testid="selectBox"
    onChange={props.onChange}
    value={props.defaultValue}
  >
    {props.options.map((elm, index) => {
      return (
        <option key={`key_${index}`} value={index}>
          {elm.label}
        </option>
      );
    })}
  </select>
);

export default Select;
