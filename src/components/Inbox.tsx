import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: "text" | "number";
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  maxLength?: number;
}
const wrapperStyle: React.CSSProperties = {
  //   marginBottom: "16px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "8px",
};
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};
const inputFocusStyle: React.CSSProperties = {
  borderColor: "#007bff",
  boxShadow: "0 0 8px rgba(0, 123, 255, 0.25)",
  outline: "none",
};

const disabledStyle: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  cursor: "not-allowed",
};

const Inbox: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder = "",
  type = "text",
  className = "",
  id,
  name,
  disabled = false,
  maxLength,
}) => {
  return (
    <div style={wrapperStyle} className={`text-input-wrapper ${className}`}>
      {label && (
        <label style={labelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        maxLength={maxLength}
        className="text-input"
        style={{
          ...inputStyle,
          ...(disabled ? disabledStyle : {}),
        }}
      />
    </div>
  );
};

export default Inbox;
