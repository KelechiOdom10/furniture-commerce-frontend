import QuantityInput from "@components/QuantityInput";
import { Icon } from "@components/shared/Icon";
import { useCart } from "@hooks/useCart";
import { Box, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import { CartItem } from "@store/cart";
import { Trash } from "tabler-icons-react";
import { useCartItemStyles } from "./cart-item.styles";

type Props = {
  item: CartItem;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { updateItem, removeItem } = useCart();
  const { classes } = useCartItemStyles();

  const handleChange = (quantity: number) => {
    updateItem(item.id, quantity);
  };

  const handleDelete = () => {
    removeItem(item.id);
  };

  return (
    <>
      <Box className={classes.root}>
        <Group className={classes.imageWrapper}>
          <Box sx={{ marginRight: "1rem" }}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              height="100%"
              classNames={{
                image: classes.image,
              }}
            />
          </Box>
        </Group>

        <Stack className={classes.itemAttributes} spacing={2}>
          <Text mt={8} sx={{ fontWeight: 600 }}>
            {item.name}
          </Text>
          <Text sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
            £{item.price.toLocaleString()}
          </Text>
          <Text
            color="dimmed"
            lineClamp={2}
            sx={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            {item.title}
          </Text>
        </Stack>
        <Box className={classes.totalAmount}>
          <Text sx={{ fontWeight: 600 }}>
            £{(item.price * item.quantity).toLocaleString()}
          </Text>
        </Box>
        <Box className={classes.quantityInput}>
          <Box sx={{ width: "90%" }}>
            <QuantityInput value={item.quantity} handleChange={handleChange} />
          </Box>
        </Box>
        <Box className={classes.deleteButton}>
          <Icon icon={<Trash />} size={24} onClick={handleDelete} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default CartItem;
