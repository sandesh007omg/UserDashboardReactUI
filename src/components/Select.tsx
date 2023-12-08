import React from "react";
import Select, { ValueType, OptionTypeBase } from "react-select";

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selectedValues: ValueType<OptionTypeBase>;
  onChange: (selectedOptions: ValueType<OptionTypeBase>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  return (
    <Select
      isMulti
      options={options}
      value={selectedValues}
      onChange={onChange}
    />
  );
};

export default MultiSelect;
