export default function Button(props){

    const {title} = props;
    return(
        <>
        <button className="btn">
            {title}
        </button>
        </>
    )
}