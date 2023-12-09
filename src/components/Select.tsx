import React from "react";
import Select, { ValueType, OptionTypeBase } from "react-select";

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selectedValues: ValueType<OptionTypeBase>;
  onChange: (selectedOptions: ValueType<OptionTypeBase>) => void;
  placeholder?: string | number;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onChange,
  placeholder,
}) => {
  return (
    <Select
      isMulti
      options={options}
      value={selectedValues}
      placeholder={placeholder}
      onChange={onChange}
      classNamePrefix="zindex-2"
    />
  );
};

export default MultiSelect;
