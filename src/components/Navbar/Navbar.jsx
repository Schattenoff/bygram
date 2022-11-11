import UserBadge from '../UserBadge/UserBadge';
import './styles.css';

const Navbar = ({nickName, avatarUrl, id}) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <a className='cnNavbarLogo' href='/'>Bygram</a>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};

export default Navbar;