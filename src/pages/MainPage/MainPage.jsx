import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Layout from '../../components/Layout/Layout';
import LoaderBars from '../../components/LoaderBars/LoaderBars';
import { getPhotos } from '../../redux/actions/photos';
import './styles.css';

const MainPage = () => {
  const [page, setPage] = useState(1);
  const photos = useSelector(state => state.photos.photos);
  const isPhotosLoading = useSelector(state => state.photos.isPhotosLoading);
  const total = useSelector(state => state.photos.totalPhotos)
  const authorizedUser = useSelector(state => state.users.authorizedUser)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextHandler = () => {
    setPage(page + 1);
  }

  if (isPhotosLoading) {
    return <LoaderBars width={80} height={80} />
  }

  return (
    <Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl}>
      <div className="cnMainPageRoot">
        <InfiniteScroll
          dataLength={photos.length}
          next={nextHandler}
          hasMore={photos.length < total}
          loader={<LoaderBars />}
          endMessage={<p style={{ textAlign: 'center' }}>That's all</p>}
        >
          {photos.map(({ id, imgUrl, likes, comments, author: { id: authorId, nickname, avatarUrl } }) => (
            <DetailedCard
              key={id}
              userName={nickname}
              avatarUrl={avatarUrl}
              userId={authorId}
              imgUrl={imgUrl}
              comments={comments}
              likes={likes}
              isLikedByYou={false}
              className="cnMainPageCard" />
          ))}
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

export default MainPage;