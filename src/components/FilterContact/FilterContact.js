import PropTypes from 'prop-types';
import s from './FilterContact.module.scss';

const FilterContact = ({ value, filter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.filterInput} onChange={value} value={filter} />
    </label>
  );
};

FilterContact.propTypes = {
  value: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterContact;
