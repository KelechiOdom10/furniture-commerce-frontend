import { Avatar, AvatarProps } from "@mantine/core";
import React, { useMemo } from "react";

const avatarVariants = ["marble", "beam", "pixel", "sunset", "ring", "bauhaus"];

const UserAvatar: React.FC<AvatarProps<"div">> = React.forwardRef(
  ({ alt, size = 30, radius = "xl", ...props }, ref) => {
    const variant = useMemo(
      () => avatarVariants[Math.floor(Math.random() * avatarVariants.length)],
      []
    );
    return (
      <Avatar
        ref={ref}
        src={`https://source.boringavatars.com/${variant}/120/${alt}l?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
        alt={alt}
        size={size}
        radius={radius}
        sx={{ cursor: "pointer" }}
        {...props}
      />
    );
  }
);

export default UserAvatar;
