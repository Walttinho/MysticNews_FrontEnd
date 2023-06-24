import logo from "../images/LogoMN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";


export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise um titulo" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo Mystic News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}

