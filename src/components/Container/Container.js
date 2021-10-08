import s from './Container.module.scss';
import React from 'react';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
