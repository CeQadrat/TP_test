import React, { FunctionComponent } from 'react';

import styles from './Button.pcss';

type Props = {
  onClick?: () => void;
};

const Button: FunctionComponent<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
