import Cart from "@components/Cart";
import { useCart } from "@hooks/useCart";
import { Text, Divider, Group, Paper, Stack, Image } from "@mantine/core";
import { CartItem, useCartHydration } from "@store/cart";
import React from "react";
import { useOrderSummaryStyles } from "./order-summary.styles";

const OrderSummary: React.FC = () => {
  const hasCartHydrated = useCartHydration();
  const deliveryFee = 6;
  const { classes } = useOrderSummaryStyles();
  const { totalAmount, cart } = useCart();
  const total = totalAmount + deliveryFee;

  return (
    <>
      {hasCartHydrated && (
        <Paper className={classes.container} withBorder shadow="none">
          <Stack spacing="md">
            <Text className={classes.heading}>Order Summary</Text>
            <Divider />
            <Stack spacing="md">
              {cart.map(item => (
                <OrderSummaryItem key={item.id} item={item} />
              ))}
            </Stack>
            <Divider />
            <Stack>
              <Group position="apart">
                <Text className={classes.orderReceiptLabel}>Subtotal</Text>
                <Text className={classes.orderReceiptLabel}>
                  £{totalAmount.toLocaleString()}
                </Text>
              </Group>
              <Group position="apart">
                <Text className={classes.orderReceiptLabel}>Shipping</Text>
                <Text className={classes.orderReceiptLabel}>
                  £{deliveryFee.toLocaleString()}
                </Text>
              </Group>
            </Stack>
            <Divider />
            <Stack>
              <Group position="apart">
                <Text className={classes.heading}>Total</Text>
                <Text className={classes.heading}>
                  £{total.toLocaleString()}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Paper>
      )}
    </>
  );
};

export default OrderSummary;

const OrderSummaryItem: React.FC<{ item: CartItem }> = ({ item }) => {
  return (
    <Group position="apart" noWrap>
      <Group noWrap align="flex-start">
        <Image src={item.imageUrl} alt={item.name} width={120} radius="sm" />
        <Stack spacing="xs">
          <Text size="md" weight={500} sx={{ width: "85%" }}>
            {item.title}
          </Text>
          <Text size="sm">Qty: {item.quantity}</Text>
        </Stack>
      </Group>
      <Text>£{item.price.toLocaleString()}</Text>
    </Group>
  );
};
