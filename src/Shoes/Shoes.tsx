import style from './Shoes.module.css';
import { ReactElement } from 'react';
import { ViewControl } from '../ViewControl/ViewControl';

export const Shoes = (): ReactElement => {
  return (
    <div className={style.shoes}>
      <iframe
        src="https://api.cappasity.com/api/player/7273dbac-3608-4c63-9783-7250893ce76f/embedded?autorun=0&amp;closebutton=1&amp;logo=1&amp;autorotate=0&amp;autorotatetime=10&amp;autorotatedelay=2&amp;autorotatedir=1&amp;hidefullscreen=1&amp;hideautorotateopt=0&amp;hidesettingsbtn=0&amp;enableimagezoom=1&amp;zoomquality=1&amp;hidezoomopt=0"
        width="100%"
        className={style.frame}
        height="550px"
        frameBorder="0"
        allowFullScreen
      />
      <ViewControl />
    </div>
  );
};
