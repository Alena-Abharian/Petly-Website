import Box from 'components/Common/Box';
import ButtonIcon from 'components/Common/ButtonIcon';
import PropTypes from 'prop-types';

import {
  Form,
  IconClose,
  IconSearch,
  Input,
  Label,
} from './SearchInput.styled';

function SearchInput({ onChange, value, clearInput }) {
  return (
    <Form>
      <Box position="relative">
        <Label htmlFor="search" />
        <Input
          value={value}
          id="search"
          type="text"
          name="search"
          autoFocus
          autoComplete="off"
          onChange={onChange}
          placeholder="Search"
          variant="standard"
          aria-describedby="search info"
        />
        <Box position="absolute" right="10px" top="10px">
          {value ? (
            <ButtonIcon
              type="button"
              aria-label="clear button"
              onClick={clearInput}
            >
              <IconClose />
            </ButtonIcon>
          ) : (
            <ButtonIcon type="button" aria-label="search button">
              <IconSearch />
            </ButtonIcon>
          )}
        </Box>
      </Box>
    </Form>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  clearInput: PropTypes.func,
};
