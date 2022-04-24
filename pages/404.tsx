import { NextPage } from "next";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  SimpleGrid,
} from "@mantine/core";
import ButtonLink from "@components/shared/ButtonLink";

const use404Styles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const NotFoundPage: NextPage = () => {
  const { classes } = use404Styles();

  return (
    <Container className={classes.root} px={42}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src="/images/404_image.svg"
          className={classes.mobileImage}
          alt="404 Image"
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text size="lg" my={12}>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <ButtonLink
            variant="default"
            href="/"
            size="md"
            mt="xl"
            className={classes.control}
          >
            Get back to home page
          </ButtonLink>
        </div>
        <Image
          src="/images/404_image.svg"
          className={classes.desktopImage}
          alt="404 Image"
        />
      </SimpleGrid>
    </Container>
  );
};

export default NotFoundPage;
