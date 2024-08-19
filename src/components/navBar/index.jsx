import PropTypes from "prop-types";
import { NavBarContainer, Logo, LogoutButton } from "./styles";

function NavBar({ logout }) {
  return (
    <NavBarContainer>
      <Logo>Git Repos</Logo>
      <LogoutButton type='button' onClick={logout}>
        Sair
      </LogoutButton>
    </NavBarContainer>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavBar;
