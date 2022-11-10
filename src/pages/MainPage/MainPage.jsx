import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Bars } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Layout from '../../components/Layout/Layout';
import { getPhotos } from '../../redux/actions/photos';
import './styles.css';

const MainPage = () => {
  const [page, setPage] = useState(1);
  const photos = useSelector(state => state.photos.photos);
  const isLoading = useSelector(state => state.photos.isPhotosLoading);
  const total = useSelector(state => state.photos.totalPhotos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(page))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextHandler = () => {
    setPage(page + 1);
  }
  return (
    <Layout nickName="Thomas" id={1}>
      <div className="cnMainPageRoot">
      {isLoading ? (<div className="cnMainLoaderContainer">
          <Bars color="#000BFF" height={80} width={80}/>
        </div>) :
        <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={<div className="cnMainLoaderContainer">
              <Bars color="#000BFF" height={15} width={15} />
            </div>}
            endMessage={<p style={{textAlign: 'center'}}>That's all</p>}
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
      }
        </div>
    </Layout>
  );
};

export default MainPage;