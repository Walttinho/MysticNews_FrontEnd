import logo from "../images/LogoMN.png";
import "./Navbar.css";
export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquise um titulo" />
        </div>
        <img src={logo} alt="Logo Mystic News" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
