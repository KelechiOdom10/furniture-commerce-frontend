import { Logo } from "@components/shared/Logo";
import { Drawer } from "@mantine/core";
import SearchInput from "../SearchInput/SearchInput";
import { useNavDrawerStyles } from "./NavDrawer.styles";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const { classes } = useNavDrawerStyles();

  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title={<Logo />}
      classNames={{
        header: classes.header,
        closeButton: classes.closeButton,
        drawer: classes.drawer,
      }}
      closeButtonLabel="Close menu drawer"
    >
      <SearchInput />
    </Drawer>
  );
};

export default NavDrawer;
