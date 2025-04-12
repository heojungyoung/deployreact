import {useParams} from "react-router-dom";

function Detail() {

    const {id} = useParams();

    return (
        <>
           <span>tttt</span>
           <span>{id}</span>
        </>
    )
}


export default Detail;
