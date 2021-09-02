import s from './ContactList.module.css';
export default function ContactList({contacts, filter, handlerDelContact}) {
  return (
    <ul className={s.list}>
      {contacts
        .filter(({name}) => name.toLowerCase().search(filter) !== -1)
        .map(({id, name, number}) => (
          <li className={s.item} key={id}>
            {name}:<span className={s.phone}>{number}</span>
            <button
              className={s.button}
              id={id}
              type="button"
              onClick={handlerDelContact}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
