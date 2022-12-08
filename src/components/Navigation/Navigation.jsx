import { useAuth } from 'hooks/useAuth';
import { NavigLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      {isLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
    </nav>
  );
};
