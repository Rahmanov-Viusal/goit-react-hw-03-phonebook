import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

const Contacts = ({ onDeleteContact, list }) => {
  console.log(list);
  if (list.length === 0) return null;
  return (
    <ul className={s.filterList}>
      {list.map(({ id, number, name }) => (
        <li className={s.filterListItem} key={id}>
          <p className={s.text}>
            {name}: <span className={s.span}>{number}</span>
          </p>

          <button
            className={s.btn}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default Contacts;
