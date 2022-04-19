import type { NextPage } from "next";
import {
  Group,
  Container,
  Title,
  Text,
  Slider,
  InputWrapper,
  NumberInput,
  SegmentedControl,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import Button from "@components/shared/Button";
import ButtonLink from "@components/shared/ButtonLink";
import { BrandApple } from "tabler-icons-react";
import { products } from "@data/products";
import ProductList from "@components/ProductList";

const Home: NextPage = () => {
  const notifications = useNotifications();
  return (
    <Container size={1400} style={{ paddingTop: 80, paddingBottom: 120 }}>
      <Title style={{ textAlign: "center", marginBottom: 20 }}>
        Mantine Next starter
      </Title>
      <Text align="center" style={{ marginBottom: 40 }}>
        This starter includes a couple of @mantine packages, feel free to remove
        everything that is not required for your application
      </Text>
      <Group position="apart">
        <ButtonLink href="https://mantine.dev" size="md">
          Mantine docs{" "}
        </ButtonLink>
        <ButtonLink
          href="https://mantine.dev/theming/theming-context/"
          variant="light"
          size="md"
        >
          Change theme
        </ButtonLink>
      </Group>

      <Title
        order={2}
        style={{ marginBottom: 30, marginTop: 50, textAlign: "center" }}
      >
        Explore features
      </Title>

      <Text weight={700}>Notifications system</Text>

      <Button
        variant="outline"
        style={{ marginTop: 10, marginBottom: 30 }}
        fullWidth
        onClick={() =>
          notifications.showNotification({
            title: "Congratulations!",
            message: "You've just clicked a button",
          })
        }
      >
        Show notification
      </Button>

      <Text weight={700}>Build forms fast with huge inputs library</Text>

      <InputWrapper label="Slider" style={{ marginTop: 15 }}>
        <Slider defaultValue={40} />
      </InputWrapper>

      <NumberInput
        defaultValue={18}
        label="Number input"
        style={{ marginTop: 15 }}
      />

      <SegmentedControl
        fullWidth
        name="segmented-control"
        style={{ marginTop: 15 }}
        data={[
          { label: "Segmented", value: "segmented" },
          { label: "Radio", value: "radio" },
          { label: "Control", value: "control" },
        ]}
      />

      <Text weight={700} style={{ marginTop: 30, marginBottom: 15 }}>
        Add your styles to any part of component
      </Text>
      <ButtonLink
        href="https://twitter.com/mantinedev"
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
      >
        {" "}
        Follow Mantine on Twitter
      </ButtonLink>

      <Button
        variant="default"
        mt={6}
        leftIcon={<BrandApple size={20} fill="white" />}
      >
        Hello
      </Button>
      <Group position="apart">
        <Button variant="light" mt={6}>
          Hello Kelechi
        </Button>
        <Button variant="subtle" mt={6} size="md">
          Hello
        </Button>
      </Group>

      <ProductList products={products} />
    </Container>
  );
};

export default Home;
