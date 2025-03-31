import CartIcon from '../icons/CartIcon';
import LoginIcon from '../icons/LoginIcon';
import ProfileIcon from '../icons/ProfileIcon'; // Nome correto (sem duplicação)

const NavLinks = () => {
  return (
    <ul className="nav__links nav__right">
      <li>
        <a href="/cart">
          <CartIcon />
        </a>
      </li>
      <li>
        <a href="/login">
          <LoginIcon />
        </a>
      </li>
      <li>
        <a href="/profile">
          <ProfileIcon /> {/* Nome consistente com a importação */}
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;