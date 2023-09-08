import PropTypes from 'prop-types';
import React from 'react';
import NewsItems from './NewsItems';
import { StyledWrapper } from './NewsList.styled';

function NewsList({ news }) {
  return (
    <StyledWrapper>
      {news.map(({ ...item }) => (
        <NewsItems key={item._id} {...item} />
      ))}
    </StyledWrapper>
  );
}

export default React.memo(NewsList);

NewsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string]),
    })
  ),
};
