import { Link } from "@chakra-ui/react";
import { FC } from "react";

interface ICustomLink {
  children: React.ReactNode;
  href: string;
  colored?: boolean;
  withoutUnderline?: boolean
}

export const CustomLink: FC<ICustomLink> = ({
  children,
  href,
  colored = false,
  withoutUnderline = false
}) => {
  return (
    <Link target="_blank" textDecoration={withoutUnderline ? "" : "underline"} color={colored ? "red" : "white"} href={href}>
      {children}
    </Link>
  );
};
