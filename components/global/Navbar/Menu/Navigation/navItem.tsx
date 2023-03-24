import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface INavItem {
  url: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const NavItem: FC<INavItem> = ({ url, children, onClick }) => {
  const router = useRouter();

  return (
    <Box
      fontSize='12px'
      fontFamily="Syne"
      _hover={{ color: "#04D7B1" }} // dodałem hover w menu
      textTransform="uppercase"
      className={router.pathname == url ? "active" : ""}
      onClick={onClick}
    >
      <Link href={url}>{children}</Link>
    </Box>
  );
};
