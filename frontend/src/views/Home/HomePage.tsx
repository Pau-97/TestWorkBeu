import { useEffect, useMemo, useState } from 'react';
import './HomePage.scss';

import { IGeolocation } from 'interfaces/Geolocation.interface';
import { IWorldTime } from 'interfaces/Worldtime.interface';

import { geolocationInfo } from '@apis/geolocationApi';
import { worldtimeInfo } from '@apis/worldtimeApi';
import { randomInfo } from '@apis/randomApi';

import { RandomRespose } from 'interfaces/Random.interface';

import { LabelComponent } from '@components/shared/label/LabelComponent';
import { BorderComponent } from '@components/shared/border/BorderComponent';

import { TimeComponent } from '@components/home/time/TimeComponent';
import { RandomComponent } from '@components/home/random/RandomComponent';
import { LoadingTwoComponent } from '@components/shared/load/LoadingTwoComponent';

const HomePage = () => {

  const [timeworld, setTimeworld] = useState<IWorldTime>();
  const [dateLocation, setDateLocation] = useState<IGeolocation>();
  const [random, setRandom] = useState<RandomRespose>();
  const [handleMore, setHandleMore] = useState<boolean>(true);

  useMemo(() => {
    (async () => {
      const geolocation = await geolocationInfo();
      setDateLocation(geolocation);
    })();
  },[])

  useEffect(() => {

    (async () => {
        const worldTime = await worldtimeInfo();
        setTimeworld(worldTime);
        const randomApi = await randomInfo();
        setRandom(randomApi);
    })();

    setInterval(() => {
      (async () => {
        const worldTime = await worldtimeInfo();
        setTimeworld(worldTime)
      })();
    }, 10000);

  }, [])

  if(!timeworld) return <div className='load'><LoadingTwoComponent/></div>

  return (
    <>
      {timeworld?.dayOrNight === 'night' && <div className='bg-nighttime'></div>}
      {timeworld?.dayOrNight === 'day' && <div className='bg-daytime' ></div>}
  
      <div className='bg-text'>
        <div className={handleMore ? 'press-up' : 'press-down'}>

          <RandomComponent author={random?.author} phase={random?.phase} isDisable={!handleMore} setRandom={setRandom}/>

          <TimeComponent dayOrNight={timeworld?.dayOrNight} timeOfDay={timeworld?.timeOfDay} time={timeworld?.time} code={timeworld?.code} cityCountry={dateLocation?.cityCountry ? dateLocation?.cityCountry : timeworld?.cityCountry} handleMore={handleMore} setHandleMore={setHandleMore} />

          {!handleMore &&
            <>
              <div className={`title ${handleMore ? 'press-up' :  'press-down'} ${timeworld?.dayOrNight === 'day' ? 'title-light': 'title-dark'}`}>

                  <div className='container-group'>
                    <div className='group'>
                      <LabelComponent title='CURRENT TIMEZONE' description={timeworld?.timezone} dayOrNight={timeworld?.dayOrNight}/>
                      <LabelComponent title='DAY OF THE YEAR' description={timeworld?.dateYear} dayOrNight={timeworld?.dayOrNight} />
                    </div>

                    <BorderComponent margin='0 10%'/>

                    <div className='group'>
                      <LabelComponent title='DAY OF THE WEEK' description={timeworld?.dayWeek} dayOrNight={timeworld?.dayOrNight} />
                      <LabelComponent title='WEEK NUMBER' description={timeworld?.weekNumber} dayOrNight={timeworld?.dayOrNight} />
                    </div>
                  </div>
               
              </div>
            </>
          }
        </div>
      </div>


    </>
  )
}

export default HomePage
