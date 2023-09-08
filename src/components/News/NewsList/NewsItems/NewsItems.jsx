import PropTypes from 'prop-types';
import Box from '../../../Common/Box';
import {
  StyledDate,
  StyledDesc,
  StyledLine,
  StyledLink,
  StyledMeta,
  StyledTitle,
} from './NewsItems.styled';

function NewsItems({ title, url, date, description }) {
  return (
    <Box>
      <StyledLine />
      <StyledTitle>{title}</StyledTitle>
      <StyledDesc>{description}</StyledDesc>
      <StyledMeta>
        <StyledDate>{date || ' '}</StyledDate>
        <StyledLink href={url} target="_blank" rel="noreferrer">
          Read more
        </StyledLink>
      </StyledMeta>
    </Box>
  );
}

export default NewsItems;

NewsItems.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string]),
};
