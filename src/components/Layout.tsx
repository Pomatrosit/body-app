import { Box, Container, Link } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Container maxW="1500px" mt={5}>
        <Box mb={7}>
          <NavLink to="/">
            <Link fontSize={25} color="purple.700" mr={10} as={"span"}>
              Weight
            </Link>
          </NavLink>
          <NavLink to="/eat">
            <Link fontSize={25} color="purple.700" as={"span"}>
              Meals
            </Link>
          </NavLink>
        </Box>

        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
