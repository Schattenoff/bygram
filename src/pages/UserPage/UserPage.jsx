import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import LoaderBars from '../../components/LoaderBars/LoaderBars';
import { getUsers } from '../../redux/actions/users';
import './styles.css';

const UserPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const authorizedUser = useSelector(state => state.users.authorizedUser);
  const isUserLoading = useSelector(state => state.users.isUserLoading)
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    dispatch(getUsers(params.nickname))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.nickname])

  if (isUserLoading) {
    return <LoaderBars width={80} height={80} />
  }

  if (!user) {
    return <div >Такого пользователя нету</div>
  }
  console.log(user);
  return (
    <Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl}>
      <div className="cnUserPageRoot">
        <div className="cnUserPageProfile">
          <img className="cnUserPageProfileAvatar" src={user?.avatarUrl} alt="avatar" />
          <div className="cnUserPageProfileAboutUser">
            <h3>{user?.nickname}</h3>
            <div className="cnUserPageInfo">
              <p className="cnUserPageInfoText"><span>0</span> публикаций</p>
              <p className="cnUserPageInfoText"><span>{user?.subscribed.reduce((prev, current) => { return prev + current })}</span> подписчиков</p>
              <p className="cnUserPageInfoText"><span>{user?.subscribers.reduce((prev, current) => { return prev + current })}</span> подписок</p>
            </div>
            <div className="cnUserPageTitleName">{`${user?.firstName} ${user.lastName}`}</div>
            <div className="cnUserPageDescription">{user.description}</div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default UserPage;