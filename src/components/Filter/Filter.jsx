import PropTypes, { string } from 'prop-types';
import { FilterInput } from './Filter.styled'

export const Filter = ({filter, onChangeFilter}) => {
  return (
    <label>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find conctact"
      />
    </label>
  )
}

Filter.prototype = {
  filter: string.array,
  onChangeFilter: PropTypes.func,
}