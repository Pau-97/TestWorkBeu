import './border.scss';

interface Props {
    margin: string;
}

export const BorderComponent = ({margin} : Props) => {
    return <div className="border" style={{ margin }}></div>
}