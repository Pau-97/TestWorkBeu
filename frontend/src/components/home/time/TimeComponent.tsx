import './time.scss';
import { LoadingComponent } from "@components/shared/load/LoadingComponent";

import { ReactComponent as MoonIcon } from "../../../assets/icons/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/icon-sun.svg";
import { ReactComponent as ArrowUp } from "../../../assets/icons/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/icons/icon-arrow-down.svg";

interface Props {
  dayOrNight: any;
  timeOfDay: any;
  time: any;
  code: any;
  cityCountry: any;
  handleMore: any;
  setHandleMore: any;
}

export const TimeComponent = ({ dayOrNight, timeOfDay, time, code, cityCountry, handleMore, setHandleMore }: Props) => {
  return (
    <div style={{ width: '80%', margin: '5em auto'}}>
      <div className='time-of-day'>
        {dayOrNight === 'night' && <MoonIcon />}
        {dayOrNight === 'day' && <SunIcon />}
        <span className='currently'>{timeOfDay}{` IT'S CURRENTLY`}</span>
        <span className='currently-mobile'>{timeOfDay}</span>
      </div>
      <div>
        <span className='time' >{time}
          <LoadingComponent message='Loading' isActive={timeOfDay ? false : true} />
        </span>
        <span className='code'>{code}</span>
      </div>
      <div className='container-city'>
        <div className='city-country'>{cityCountry}</div>
        <button className='btn' onClick={() => setHandleMore(!handleMore)}>
          <span className='btn-text'>{handleMore ? 'MORE' : 'LESS'}</span>
          {handleMore ? <ArrowDown /> : <ArrowUp />}
        </button>
      </div>
    </div>)
}