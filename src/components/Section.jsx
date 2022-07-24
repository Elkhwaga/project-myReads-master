import React from 'react';

const Section = (props) => {
  return <section className='section container'>{props.children}</section>;
};

export const SectionTitle = (props) => {
  return <div className='section-title'>{props.children}</div>;
};

export const SectionBody = (props) => {
  return <div className='section-body'>{props.children}</div>;
};

export default Section;
