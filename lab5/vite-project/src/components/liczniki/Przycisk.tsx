export default function Przycisk({onClick}:{onClick: React.MouseEventHandler<HTMLButtonElement>}){
    return (
        <button onClick={onClick}>Dodaj</button>
    )
}