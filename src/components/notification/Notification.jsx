import css from 'components/notification/notification.module.css';

const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

export default Notification;
