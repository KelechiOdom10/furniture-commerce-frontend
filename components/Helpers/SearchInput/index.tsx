import CustomInput from "@components/shared/Input";
import { Search } from "tabler-icons-react";
import { useSearchInputStyles } from "./search-input.styles";

type SearchInputProps = React.ComponentProps<typeof CustomInput>;

const SearchInput: React.FC<SearchInputProps> = props => {
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
      onChange={e => e.target.value}
      {...props}
    />
  );
};

export default SearchInput;
