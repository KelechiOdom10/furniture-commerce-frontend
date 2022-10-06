import Button from "@components/shared/Button";
import { Alert, Group, Paper, Radio, Stack, Text, Title } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";
import { useEstimatedDeliveryStyles } from "./estimated-delivery.styles";

type Props = {
  handleNext: () => void;
  handlePrevious: () => void;
};

const EstimatedDelivery: React.FC<Props> = ({ handleNext, handlePrevious }) => {
  const { classes } = useEstimatedDeliveryStyles();
  return (
    <Stack spacing="md">
      <Alert icon={<CircleCheck size={16} />} color="yellow">
        Estimated dispatch within 5 working days
      </Alert>
      <Paper shadow="none" p="xl" className={classes.paper}>
        <Radio
          value="react"
          label={
            <Stack className={classes.label}>
              <Title className={classes.labelTitle}>Standard Delivery</Title>
              <Text className={classes.labelDescription}>
                Monday to Friday, 8am to 6pm
              </Text>
            </Stack>
          }
          defaultChecked
          size="md"
          color="dark"
        />
      </Paper>
      <Group position="left" mt="xl">
        <Button variant="light" onClick={handlePrevious}>
          Back
        </Button>
        <Button variant="default" onClick={handleNext}>
          Continue
        </Button>
      </Group>
    </Stack>
  );
};

export default EstimatedDelivery;
