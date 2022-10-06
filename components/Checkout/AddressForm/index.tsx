import { z } from "zod";
import { useForm } from "react-hook-form";
import { Group, NativeSelect, Stack } from "@mantine/core";
import { TextInput } from "@components/shared/Input";
import Button from "@components/shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import useDeliveryDetailsStore, {
  DeliveryDetails,
  useDeliveryHydration,
} from "@store/address";
import { useAddressFormStyles } from "./address-form.styles";

type Props = {
  handleNext: () => void;
};

const AddressForm: React.FC<Props> = ({ handleNext }) => {
  const { classes } = useAddressFormStyles();
  const { deliveryDetails, setDeliveryDetails } = useDeliveryDetailsStore();
  const hasDeliveryDetailsHydrated = useDeliveryHydration();

  const DeliveryDetailsSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    postCode: z.string().min(1, "Post code is required"),
    phoneNumber: z.string().min(1, "Phone is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
  });
  // type ShippingAddressDto = z.infer<typeof DeliveryDetailsSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryDetails>({
    resolver: zodResolver(DeliveryDetailsSchema),
    defaultValues: deliveryDetails,
  });

  const handleContinue = handleSubmit(data => {
    setDeliveryDetails(data);
    handleNext();
  });

  return (
    <>
      {hasDeliveryDetailsHydrated && (
        <form onSubmit={handleContinue} noValidate>
          <Stack spacing="lg">
            <Group grow>
              <TextInput
                required
                label="First Name"
                placeholder="First Name"
                className={classes.formGroupInput}
                error={errors?.firstName?.message}
                {...register("firstName")}
              />
              <TextInput
                required
                label="Last Name"
                placeholder="Last Name"
                className={classes.formGroupInput}
                error={errors?.lastName?.message}
                {...register("lastName")}
              />
            </Group>
            <TextInput
              required
              label="Address"
              placeholder="Address"
              error={errors?.address?.message}
              {...register("address")}
            />
            <Group grow>
              <TextInput
                required
                label="City"
                placeholder="City"
                className={classes.formGroupInput}
                error={errors?.city?.message}
                {...register("city")}
              />
              <NativeSelect
                required
                label="Country"
                size="md"
                className={classes.formGroupInput}
                error={errors?.country?.message}
                {...register("country")}
                placeholder="Select country"
                data={[
                  { value: "United Kingdom", label: "United Kingdom" },
                  { value: "Ireland", label: "Ireland" },
                ]}
              />
            </Group>
            <Group grow>
              <TextInput
                required
                label="Postcode"
                placeholder="Postcode"
                className={classes.formGroupInput}
                error={errors?.postCode?.message}
                {...register("postCode")}
              />
              <TextInput
                required
                type="tel"
                label="Phone Number"
                placeholder="Phone number"
                className={classes.formGroupInput}
                error={errors?.phoneNumber?.message}
                {...register("phoneNumber")}
              />
            </Group>
            <TextInput
              required
              type="email"
              label="Email (for order confirmation)"
              placeholder="Enter valid Email Address"
              error={errors?.email?.message}
              {...register("email")}
            />
            <Button type="submit" variant="default">
              Continue
            </Button>
          </Stack>
        </form>
      )}
    </>
  );
};

export default AddressForm;
