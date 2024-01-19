import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
      <section
          style={{
          padding: '20px 40px',
      }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};