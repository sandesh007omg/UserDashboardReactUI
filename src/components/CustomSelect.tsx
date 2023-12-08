import Select, { components } from "react-select";
import styled from "styled-components";

interface MessageStyledProps {
  status?: string;
}

// TODO: fix interface

// interface CustomSelectProps {
//   placeholder: string;
//   enableValidation?: boolean;
// }

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    {/* <Icon iconName="caret-bottom" /> */}
  </components.DropdownIndicator>
);

const CustomSelect = (props: any) => {
  const {
    name,
    placeholder,
    errorMessage,
    onChange,
    value,
    labelContent,
    getOptionLabel,
    getOptionValue,
    autoFocus,
    id,
    isSearchable,
    isClearable,
    options,
    iconName,
    isMulti,
    disabled,
    defaultValue,
    small,
    requiredIcon,
    isError,
    isValid,
    grey,
    setTouched,
    filterOption,
    onInputChange,
    defaultInputValue,
    defaultMenuIsOpen,
    ref,
    menuPortalTarget,
    styles,
    menuShouldBlockScroll,
    size32,
    onFocus,
  } = props;

  return (
    <SelectStyle>
      <div>
        {labelContent !== undefined ? (
          <LabelStyled>
            {labelContent} {requiredIcon && <span className="required">*</span>}
          </LabelStyled>
        ) : (
          <div className="display-none" />
        )}
        <Select
          ref={ref}
          id={id}
          classNamePrefix="zindex-2"
          className={isError ? "form-select-border select-css" : "select-css"}
          value={value}
          options={options}
          isMulti={isMulti}
          autoFocus={autoFocus}
          isDisabled={disabled}
          placeholder={placeholder}
          isClearable={isClearable}
          isSearchable={isSearchable}
          defaultValue={defaultValue}
          onBlur={() => (setTouched ? setTouched(name, true) : {})}
          onChange={(event) => onChange(event)}
          getOptionValue={(element) => getOptionValue(element)}
          getOptionLabel={(element) => getOptionLabel(element)}
          components={{ DropdownIndicator }}
          onInputChange={onInputChange}
          filterOption={filterOption}
          menuPortalTarget={menuPortalTarget}
          menuShouldBlockScroll={menuShouldBlockScroll}
          defaultInputValue={defaultInputValue}
          defaultMenuIsOpen={defaultMenuIsOpen}
          menuPlacement="auto"
          styles={styles}
          onFocus={onFocus}
        />
        {isError && errorMessage && (
          <MessageStyled className="form-error">
            <span className="error-message">{errorMessage}</span>
          </MessageStyled>
        )}
      </div>
    </SelectStyle>
  );
};
const SelectStyle = styled.div`
  .zindex-2__control {
    border: 1px solid #e7e7ed;
    background: #f1f2f5;
    &:hover {
      border: 1px solid #e7e7ed;
    }
  }
`;
const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  color: #272833;
  font-size: 14px;
  font-weight: 600;

  span.required {
    color: red;
  }
`;

const MessageStyled = styled.span<MessageStyledProps>`
  margin-top: 5px;
  display: inline-block;
  color: #8993a4;
  font-size: 14px;
  font-weight: 600;

  .error-message {
    color: #da1414;
    font-weight: 500;
    svg {
      color: #da1414;
      margin-right: 4px;
    }
  }
`;

export default CustomSelect;
