import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();

    interface Request {
        trmRqstNo: number;
        trmRqstTypeCd: string;
        trmRqstTlt: string;
        trmRqstDueDt: Date;
    }

    const [request, setRequest] = useState<Request | null>(null);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        axios.get(`/request/detail/${id}`)
            .then(res => {
                console.log('detail');
                console.log(res.data);
                setRequest(res.data);
            }).catch(console.error);
    }

    return (
        <>
            <div>detail</div>
            <div>{id}</div>
            <div>{request?.trmRqstTypeCd}</div>
        </>
    )
}

export default Detail;
