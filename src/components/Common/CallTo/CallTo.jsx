import PropTypes from 'prop-types';
import { LinkBox } from '../EmailTo/EmailTo.styled';

export default function CallTo({ phone, children }) {
  return <LinkBox href={`tel:${phone}`}>{children}</LinkBox>;
}

CallTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node.isRequired,
};
