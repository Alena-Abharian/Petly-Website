import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { NoLogo } from '../../../assets/images/friends';
import {
  StyledContentWrapper,
  StyledImg,
  StyledImgWrapper,
  StyledItem,
  StyledMeta,
  StyledNoField,
  StyledSubLink,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from './FriendsItems.styled';
import FriendsItemsTime from './FriendsItemsTime';

const noItem = '-----------------------';

function FriendsItems({
  address,
  imageUrl,
  phone,
  title,
  email,
  url,
  workDays,
  addressUrl,
  _id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollY = useRef(0);

  const handleClick = () => {
    if (workDays === null || workDays.length === 0) return;
    setIsOpen(prevState => !prevState);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && isOpen) {
        setIsOpen(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);
  return (
    <StyledItem ref={prevScrollY}>
      <StyledTitle href={url} target="_blank" rel="noreferrer">
        {title}
      </StyledTitle>
      <StyledWrapper>
        <StyledImgWrapper>
          <StyledImg src={imageUrl || NoLogo} alt={title} />
        </StyledImgWrapper>
        <StyledContentWrapper>
          <FriendsItemsTime
            onClick={handleClick}
            workDays={workDays}
            isOpen={isOpen}
          />

          <StyledMeta>
            <StyledSubTitle>Adress:</StyledSubTitle>
            {addressUrl ? (
              <StyledSubLink href={addressUrl} target="_blank" rel="noreferrer">
                {address || noItem}
              </StyledSubLink>
            ) : (
              <StyledNoField>{address || noItem}</StyledNoField>
            )}
          </StyledMeta>
          <StyledMeta>
            <StyledSubTitle>Email:</StyledSubTitle>
            {email ? (
              <StyledSubLink
                href={`mailto:${email}`}
                target="_blank"
                rel="noreferrer"
              >
                {email}
              </StyledSubLink>
            ) : (
              <StyledNoField>{noItem}</StyledNoField>
            )}
          </StyledMeta>
          <StyledMeta>
            <StyledSubTitle>Phone:</StyledSubTitle>
            {phone ? (
              <StyledSubLink
                isPhone={true}
                href={`tel:${phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {phone}
              </StyledSubLink>
            ) : (
              <StyledNoField>{noItem}</StyledNoField>
            )}
          </StyledMeta>
        </StyledContentWrapper>
      </StyledWrapper>
    </StyledItem>
  );
}

export default FriendsItems;

FriendsItems.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  addressUrl: PropTypes.string,
};
