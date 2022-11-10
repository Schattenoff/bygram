import UserBadge from '../UserBadge/UserBadge';
import './styles.css';

const Navbar = ({nickName, avatarUrl, id}) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <span>Bygram</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};

export default Navbar;