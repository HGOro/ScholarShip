import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" style={{width: "200"}} {...props} />
    </div>
  );
}

export default Input;