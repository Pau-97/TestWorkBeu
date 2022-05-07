import './load.scss';

interface Props {
    message?: string;
    isActive: boolean;
    color?: string;
}


export const LoadingComponent = ({ message = '', isActive, color = 'white' }: Props) => {
    if (!isActive) return <></>;
    return (
        <div className='container'>
            <span className='message-loading'>{message}</span>
            <div className="lds-ellipsis"><div style={{ backgroundColor: color }}></div><div></div><div></div><div></div></div>
        </div>

    )
}