import PropTypes from 'prop-types';

import { FilterLabel, FilterInput, FilterTitle } from './Filter.styled';

const Filter = ({ onHandleChange, filter = '' }) => {
  return (
    <FilterLabel>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        onChange={onHandleChange}
        value={filter}
      />
    </FilterLabel>
  );
};

export { Filter };

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
