import React, { FocusEvent, useRef } from "react";
import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { Plus, Minus } from "tabler-icons-react";
import { useQuantityInputStyles } from "./quantity-input.styles";
import useCartStore from "store/cart";
import { Icon } from "@components/shared/Icon";

interface QuantityInputProps {
  min?: number;
  max?: number;
  productId: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  min = 1,
  max = 10,
  productId,
}) => {
  const { classes } = useQuantityInputStyles();
  const handlers = useRef<NumberInputHandlers>();
  const { getCartItem, removeItem, updateItem } = useCartStore();
  const value = getCartItem(productId)?.quantity || 1;

  const handleChange = (value: number) => {
    if (!value) return;
    value === 0 ? removeItem(productId) : updateItem(productId, value);
  };

  return (
    <div className={classes.wrapper}>
      <Icon
        icon={<Minus size={16} />}
        size={28}
        variant="transparent"
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
        onChange={handleChange}
        classNames={{ input: classes.input }}
      />

      <Icon
        icon={<Plus size={16} />}
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.increment()}
        disabled={value === max}
        className={classes.control}
        onMouseDown={event => event.preventDefault()}
      />
    </div>
  );
};

export default QuantityInput;
