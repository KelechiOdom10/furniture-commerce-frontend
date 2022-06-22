import Link from "@components/shared/Link";
import { Breadcrumbs as MantineBreadcrumbs, Text } from "@mantine/core";
import { useBreadcrumbsStyles } from "./breadcrumbs.styles";

type BreadcrumbItem = {
  title: string;
  href?: string;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const { classes } = useBreadcrumbsStyles();

  const items = breadcrumbs.map((item, index) => {
    if (index === breadcrumbs.length - 1) {
      return (
        <Text style={{ fontWeight: 500 }} key={index}>
          {item.title}
        </Text>
      );
    }
    return (
      <Link key={index} href={item.href!}>
        {item.title}
      </Link>
    );
  });

  return (
    <MantineBreadcrumbs
      my={36}
      classNames={{
        root: classes.breadcrumbs,
        separator: classes.breadcrumbsSeparator,
        breadcrumb: classes.breadcrumbsText,
      }}
    >
      {items}
    </MantineBreadcrumbs>
  );
};

export default Breadcrumbs;
