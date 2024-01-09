import css from 'components/section/section.module.css';

const Section = ({ children, title }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      {children}
    </>
  );
};

export default Section;
