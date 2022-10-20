import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
