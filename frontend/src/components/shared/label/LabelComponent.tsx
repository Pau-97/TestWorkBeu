import './label.scss';
import { LoadingComponent } from "../load/LoadingComponent";

interface Props {
    title: String;
    description?: any;
    dayOrNight: any;
}

export const LabelComponent = ({ title, description, dayOrNight }: Props) => {
    return (<div className='container-label'>
        <span className={`${dayOrNight === 'day' ? 'color-dark' : 'color-light'} title-label`}>{title}</span>
        <span className={`${dayOrNight === 'day' ? 'color-dark' : 'color-light'} description-label`}>
            {description}
            <LoadingComponent isActive={(description || description == 0) ? false : true} />
        </span>
    </div>)
}