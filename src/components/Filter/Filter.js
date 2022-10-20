import PropTypes from 'prop-types';

import { FilterWrapper } from './Filter.styled';
export const Filter = ({ value, changeFilter }) => {
  return (
    <FilterWrapper>
      <label>Fined contacts by name:</label>
      <input type="text" name="filter" value={value} onChange={changeFilter} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
