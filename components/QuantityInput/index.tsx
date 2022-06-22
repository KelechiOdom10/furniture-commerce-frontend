import React, { useRef } from "react";
import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { Plus, Minus } from "tabler-icons-react";
import { useQuantityInputStyles } from "./quantity-input.styles";
import { Icon } from "@components/shared/Icon";

interface QuantityInputProps {
  min?: number;
  max?: number;
  value?: number;
  handleChange?: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  min = 0,
  max = 10,
  value = 1,
  handleChange = () => {},
}) => {
  const { classes } = useQuantityInputStyles();
  const handlers = useRef<NumberInputHandlers>();

  return (
    <div className={classes.wrapper}>
      <Icon
        icon={<Minus size={16} />}
        size={28}
        variant="transparent"
        name="Minus Icon"
        onClick={() => handlers.current?.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={event => event.preventDefault()}
      />

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        readOnly
        onChange={handleChange}
        classNames={{ input: classes.input }}
      />

      <Icon
        icon={<Plus size={16} />}
        size={28}
        variant="transparent"
        title="Plus Icon"
        onClick={() => handlers.current?.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={event => event.preventDefault()}
      />
    </div>
  );
};

export default QuantityInput;
