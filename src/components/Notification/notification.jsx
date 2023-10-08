import React from 'react';
import css from './notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);
