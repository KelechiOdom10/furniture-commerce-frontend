import React from "react";
import { TextInput, TextInputProps } from "@mantine/core";

const CustomInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return <TextInput {...props} ref={ref} />;
  }
);

export default CustomInput;
