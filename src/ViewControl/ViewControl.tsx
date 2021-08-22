import style from './ViewControl.module.css';
import { ReactElement } from 'react';

export const ViewControl = (): ReactElement => {
  return (
    <div className={style.viewControl}>
      <div className={style.podium}>
        <div className={style.controls}></div>
      </div>
    </div>
  );
};
