import React from 'react';

const TweetContent = () => {
  return (
    <React.Fragment>
      <div>
        <span className="tweet__title">Jane Walsh</span>
        <span className="tweet__account">@jwalshm . Sep 10</span>
      </div>
      <p className="tweet__message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        molestiae voluptate est dolorum eius, fugiat pariatur saepe alias nobis
        tempora. Deleniti, mollitia? Fugit deleniti praesentium libero soluta
        assumenda optio quidem.
      </p>
    </React.Fragment>
  );
};

export default TweetContent;
