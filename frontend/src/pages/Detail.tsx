import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    return (
        <>
            <div>tttt</div>
            <div>{id}</div>
        </>
    )
}

export default Detail;
