import PropTypes from 'prop-types';
import {
  StyledFullTime,
  StyledFullTimeItem,
  StyledSpan,
  StyledTimeDesc,
  StyledTimeTitle,
  StyledTimeWrapper,
} from './FriendsItemsTime.styled';

const weekArr = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

function FriendsItemsTime({ workDays, isOpen, onClick }) {
  const currenDayTime = arr => {
    const dayOfWeekDigit = new Date().getDay();
    let currentValue = '-----------------------';

    if (arr === null || arr.length === 0) return currentValue;

    switch (dayOfWeekDigit) {
      case 0:
        if (!arr[6]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[6].from} - ${arr[6].to}`;
        }
        break;
      case 1:
        if (!arr[0]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[0].from} - ${arr[0].to}`;
        }
        break;
      case 2:
        if (!arr[1]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[1].from} - ${arr[1].to}`;
        }
        break;
      case 3:
        if (!arr[2]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[2].from} - ${arr[2].to}`;
        }
        break;
      case 4:
        if (!arr[3]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[3].from} - ${arr[3].to}`;
        }
        break;
      case 5:
        if (!arr[4]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[4].from} - ${arr[4].to}`;
        }
        break;
      case 6:
        if (!arr[5]?.isOpen) {
          currentValue = 'Closed';
        } else {
          currentValue = `${arr[5].from} - ${arr[5].to}`;
        }
        break;
      default:
        currentValue = null;
        break;
    }
    return currentValue;
  };

  const weekFn = arr => {
    if (!arr) return null;
    return arr.map((item, index) => (
      <StyledFullTimeItem key={index}>
        {weekArr[index]}
        {item.isOpen ? (
          <div style={{ display: 'flex' }}>
            <StyledSpan>{item.from}</StyledSpan> -
            <StyledSpan>{item.to}</StyledSpan>
          </div>
        ) : (
          <StyledSpan>Closed</StyledSpan>
        )}
      </StyledFullTimeItem>
    ));
  };
  return (
    <StyledTimeWrapper onClick={onClick}>
      <StyledTimeTitle isOpen={isOpen}>Time:</StyledTimeTitle>
      <StyledTimeDesc isOpen={isOpen}>{currenDayTime(workDays)}</StyledTimeDesc>
      <StyledFullTime isOpen={isOpen}>{weekFn(workDays)}</StyledFullTime>
    </StyledTimeWrapper>
  );
}

export default FriendsItemsTime;

FriendsItemsTime.propTypes = {
  workDays: PropTypes.array,
  isOpen: PropTypes.bool,
};
