import React, { useState } from "react";
import { useCart } from "@hooks/useCart";
import {
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useCartStyles } from "./cart.styles";
import CartItem from "./CartItem";
import Button from "@components/shared/Button";
import ButtonLink from "@components/shared/ButtonLink";
import { useCartHydration } from "@store/cart";

const Cart: React.FC = () => {
  const hasCartHydrated = useCartHydration();
  const { cart, totalAmount } = useCart();
  const { classes } = useCartStyles();
  const [couponCode, setCouponCode] = useState("");

  const handleCouponCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };

  return (
    <>
      {hasCartHydrated && (
        <Group className={classes.root} noWrap>
          {cart.length > 0 ? (
            <>
              <Stack className={classes.cartItemsContainer}>
                <Title order={2}>{`Your Cart (${cart.length})`}</Title>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Stack>
              <Paper
                className={classes.checkoutContainer}
                withBorder
                shadow="none"
              >
                <Stack spacing="md">
                  <TextInput
                    value={couponCode}
                    onChange={handleCouponCodeChange}
                    placeholder="Coupon code"
                    size="md"
                    styles={{
                      input: {
                        borderWidth: 0.5,
                        height: 45,
                      },
                    }}
                    rightSection={
                      <Button
                        variant="default"
                        size="xs"
                        disabled={couponCode === ""}
                        sx={{
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        }}
                      >
                        Submit
                      </Button>
                    }
                    rightSectionWidth={85}
                  />
                  <Divider />
                  <Stack>
                    <Group position="apart">
                      <Text className={classes.orderReceiptLabel}>
                        Subtotal
                      </Text>
                      <Text className={classes.orderReceiptLabel}>
                        £{totalAmount.toLocaleString()}
                      </Text>
                    </Group>
                    <Group position="apart">
                      <Text className={classes.orderReceiptLabel}>
                        Shipping
                      </Text>
                      <Text
                        className={classes.orderReceiptLabel}
                        color="dimmed"
                      >
                        To be updated on the next step
                      </Text>
                    </Group>
                  </Stack>
                  <Divider />
                  <Stack>
                    <Group position="apart">
                      <Text className={classes.totalReceiptLabel}>Total</Text>
                      <Text className={classes.totalReceiptLabel}>
                        £{totalAmount.toLocaleString()}
                      </Text>
                    </Group>
                    <Button variant="default" fullWidth>
                      Checkout
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </>
          ) : (
            <Stack
              align="center"
              justify="center"
              sx={{ width: "100%" }}
              mt={24}
            >
              <Title
                sx={{ fontWeight: 500, textAlign: "center", fontSize: 40 }}
              >
                Your cart is empty
              </Title>
              <ButtonLink href="/products" variant="light">
                Continue Shopping
              </ButtonLink>
            </Stack>
          )}
        </Group>
      )}
    </>
  );
};

export default Cart;
