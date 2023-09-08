import PropTypes from 'prop-types';
import { LinkBox } from './EmailTo.styled';

export default function EmailTo({ email, children }) {
  return <LinkBox href={`mailto:${email}`}>{children}</LinkBox>;
}

EmailTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node.isRequired,
};
