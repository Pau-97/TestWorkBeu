import './random.scss';
import { ReactComponent as RefreshIcon } from "../../../assets/icons/icon-refresh.svg";
import { randomInfo } from '@apis/randomApi';

interface Props {
    phase: string | undefined;
    author: string | undefined;
    isDisable: boolean;
    setRandom: any;
}

export const RandomComponent = ({ phase, author, isDisable, setRandom }: Props) => {
    
    const handleRefresh = async () => {
        const randomApi = await randomInfo();
        setRandom(randomApi);
    }

    if(isDisable) return <></>;
    return (<div className={`random-api ${setRandom && 'random'}`}>
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
            <div className='random-phase'>{phase}</div>
            <RefreshIcon onClick={handleRefresh} className='random-refresh'/>
        </div>
        <br />
        <span className='random-author'>{author}</span>
    </div>)
}