package com.goodperson.backend.request;

import com.goodperson.backend.request.entity.RequestItemL;
import com.goodperson.backend.request.entity.RequestM;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RequestWrapper {

    private RequestM requestM;
    private RequestItemL requestItemL;

}
