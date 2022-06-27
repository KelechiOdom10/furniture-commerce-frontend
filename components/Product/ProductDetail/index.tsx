import React, { useState } from "react";
import QuantityInput from "@components/Helpers/QuantityInput";
import Button from "@components/shared/Button";
import { Accordion, Box, Group, Stack, Text, Title } from "@mantine/core";
import { BuildingStore, Truck } from "tabler-icons-react";
import { ProductDetailType } from "types";
import Carousel from "./Carousel";
import { useProductDetailStyles } from "./product-detail.styles";
import MoreLikeThis from "./MoreLikeThis";
import { useCart } from "@hooks/useCart";
import { CartItem } from "@store/cart";

type Props = {
  product: ProductDetailType;
};

const ProductDetail: React.FC<Props> = ({ product }) => {
  const { classes } = useProductDetailStyles();
  const { addItem } = useCart();
  const [value, setValue] = useState(1);

  const handleChange = (value: number) => {
    console.log(value);
    setValue(value);
  };

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: value,
      title: product.title,
      imageUrl: product.images[0],
    };

    addItem(item, value);
  };

  return (
    <Box className={classes.root} mb={80}>
      <Group className={classes.container}>
        <Box className={classes.carousel}>
          <Carousel images={product.images} />
        </Box>
        <Stack className={classes.detail}>
          <Stack spacing={24} align="start">
            <Stack spacing={6}>
              <Title className={classes.name} order={6}>
                {product.name}
              </Title>
              <Text className={classes.title}>{product.title}</Text>
            </Stack>
            <Title className={classes.price}>
              £{product.price.toLocaleString()}
            </Title>
            <Stack className={classes.cartControl}>
              <Box className={classes.quantityInput}>
                <QuantityInput
                  value={value}
                  handleChange={handleChange}
                  max={product.quantity - 1}
                />
              </Box>
              <Box className={classes.cartControlButton}>
                <Button variant="default" fullWidth onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Box className={classes.accordionDesktop}>
            <ProductDetailAccordion description={product.description!} />
          </Box>
        </Stack>
      </Group>
      <Box className={classes.accordionMobile}>
        <ProductDetailAccordion description={product.description!} />
      </Box>
      <MoreLikeThis
        categorySlug={product.categorySlug}
        productId={product.id}
      />
    </Box>
  );
};

type AcItem = {
  icon?: React.ReactNode;
  text: React.ReactNode | string;
};

const AccordionItem: React.FC<AcItem> = ({ icon, text }) => {
  const { classes } = useProductDetailStyles();
  return (
    <Group noWrap>
      {icon && icon}
      <Text className={classes.accordionShippingItem}>{text}</Text>
    </Group>
  );
};

const ProductDetailAccordion: React.FC<{ description?: string }> = ({
  description,
}) => {
  const { classes } = useProductDetailStyles();
  return (
    <Accordion
      iconPosition="right"
      sx={{ width: "100%", alignSelf: "stretch" }}
      classNames={{
        control: classes.accordionControl,
      }}
    >
      <Accordion.Item label="Shipping">
        <Stack>
          <AccordionItem
            icon={<BuildingStore width={18} />}
            text={
              <>
                Contactless curbside or in-store pickup <span>FREE</span>
              </>
            }
          />
          <AccordionItem icon={<Truck width={18} />} text="Home Delivery" />
          <AccordionItem text="Store and shipping preferences can be updated in the cart" />
        </Stack>
      </Accordion.Item>

      <Accordion.Item label="Description">
        <AccordionItem text={description || ""} />
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductDetail;
