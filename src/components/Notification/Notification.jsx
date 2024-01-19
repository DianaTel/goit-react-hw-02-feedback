import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p
    style={{
      fontSize: '38px',
      fontWeight: '500',
      lineHeight: '1.1',
      color: 'red',
    }}
  >
    {message}
  </p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
