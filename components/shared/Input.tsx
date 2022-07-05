import React from "react";
import {
  PasswordInput,
  PasswordInputProps,
  TextInput,
  TextInputProps,
} from "@mantine/core";

const CustomTextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <TextInput
        ref={ref}
        size="md"
        styles={theme => ({
          invalid: {
            "::placeholder": {
              color: theme.colors.gray[5],
            },
          },
        })}
        {...props}
      />
    );
  }
);

const CustomPasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>((props, ref) => {
  return (
    <PasswordInput
      ref={ref}
      size="md"
      styles={theme => ({
        invalid: {
          "::placeholder": {
            color: theme.colors.gray[5],
          },
        },
      })}
      {...props}
    />
  );
});

export { CustomTextInput as TextInput, CustomPasswordInput as PasswordInput };
