import { ActionIcon, ActionIconProps } from "@mantine/core";
import Link from "./Link";

interface IconProps {
  icon: React.ReactNode;
}
export const Icon: React.FC<ActionIconProps<"button"> & IconProps> = ({
  icon,
  ...props
}) => {
  return <ActionIcon {...props}>{icon}</ActionIcon>;
};

export const IconLink: React.FC<ActionIconProps<typeof Link> & IconProps> = ({
  href,
  icon,
  ...props
}) => {
  return (
    <ActionIcon<typeof Link> component={Link} href={href} {...props}>
      {icon}
    </ActionIcon>
  );
};
