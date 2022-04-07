import CustomInput from "@components/shared/Input";
import { Search } from "tabler-icons-react";
import { useSearchInputStyles } from "./SearchInput.styles";

const SearchInput: React.FC = () => {
  const { classes } = useSearchInputStyles();
  return (
    <CustomInput
      className={classes.inputContainer}
      classNames={{
        input: classes.input,
        icon: classes.icon,
      }}
      aria-label="Search Products Input"
      icon={<Search color="black" />}
      iconWidth={40}
      placeholder="Search products"
    />
  );
};

export default SearchInput;
