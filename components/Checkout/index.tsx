import { useState } from "react";
import { Stepper, Group } from "@mantine/core";
import { useCheckoutStyles } from "./checkout.styles";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";
import EstimatedDelivery from "./EstimatedDelivery";

const Checkout: React.FC = () => {
  const { classes } = useCheckoutStyles();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive(current => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive(current => (current > 0 ? current - 1 : current));

  return (
    <Stepper
      active={active}
      className={classes.root}
      color="dark"
      onStepClick={setActive}
      breakpoint="sm"
    >
      <Stepper.Step
        label="Shipping Address"
        description="Pick a shipping address"
      >
        <Group className={classes.shippingAddress}>
          <div className={classes.addressForm}>
            <AddressForm handleNext={nextStep} />
          </div>
          <OrderSummary />
        </Group>
      </Stepper.Step>
      <Stepper.Step label="Delivery" description="Estimated delivery">
        <EstimatedDelivery handleNext={nextStep} handlePrevious={prevStep} />
      </Stepper.Step>
      <Stepper.Step label="Payment" description="Choose payment method">
        Step 3 content: Get full access
      </Stepper.Step>
      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
};

export default Checkout;
