import { useState } from 'react';
import Comment from '../Comment/Comment';
import UserBadge from '../UserBadge/UserBadge';
import './styles.css';

const DetailedCard = ({userName, avatarUrl, userId, imgUrl, likes, isLikedByYou, comments, className}) => {
  const [isCommentShowAll, setIsCommentShowAll] = useState(false);
  const [isCommentWrite, setIsCommentWrite] = useState(false);


  const sumLikes = (likes) => {
    return likes.reduce((prev, next) => {return prev + next}, 0)
  }
  const renderComments = () => {
    if(comments.length > 2 && !isCommentShowAll) {
      const commentsCopy = [...comments];
      const commentForRender = commentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span className="cnDetailedCardOpenComments" onClick={() => setIsCommentShowAll(true)}>{`Показать ещё ${comments.length - commentForRender.length} комментариев`}</span>
          {commentForRender.map((comment) => (
              <Comment 
                key={Math.random(100)}
                nickname={comment.nickname} 
                text={comment.text} 
              />
            )
          )}
        </>
      )
    }

    return comments.length !== 0 
    ? comments.map((comment) => (
      <Comment key={Math.random(100)} nickname={comment.nickname} text={comment.text} />
    )) 
    : <></>
  }

  return (
    <div className={`cnDetailedCardRoot ${className}`}>
      <div className="cnDetailedCardHeader">
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt="img" className="cnDetailedCardImg" />
        <div className="cnDetailedCardButtons">
          <i className={`${isLikedByYou ? "fas" : "far"} fa-heart cnDetailedCardLikeIcon`}/>
          <i onClick={() => setIsCommentWrite(prev => !prev)} className={`${isCommentWrite ? "fas" : "far"} fa-comment cnDetailedCardCommentIcon`}></i>
        </div>
      </div>
      <div className="cnDetailedCardLikes">{`Оценили ${sumLikes(likes)} человек`}</div>
      <div className="cnDetailedCardComments">
        {
          renderComments()
        }
      </div>
      {isCommentWrite ? <textarea className="cnDetailedCardTextArea" placeholder='Ваш комментарий' /> : <></>}
    </div>
  );
};

export default DetailedCard;