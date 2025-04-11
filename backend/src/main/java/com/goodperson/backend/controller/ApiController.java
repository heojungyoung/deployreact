package com.goodperson.backend.controller;

import java.time.LocalDate;
import java.util.List;
import com.goodperson.backend.request.RequestM;
import com.goodperson.backend.request.RequestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApiController {

    private final RequestService requestService;

    public ApiController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/api/hello")
    public List<RequestM> hello() {
        List<RequestM> requestM = this.requestService.getNo();
        System.out.println(requestM);
        return requestM;
    }

    @PostMapping("/api/enroll")
    public void enrole(@RequestBody RequestM data) {

         RequestM requestM = new RequestM();
         requestM.setTrmRqstTlt(data.getTrmRqstTlt());
         requestM.setTrmRqstTypeCd(data.getTrmRqstTypeCd());
         requestM.setFnlDueDt(LocalDate.now());
         requestM.setRegDt(LocalDate.now());
         requestM.setRegGuid("system");
         requestM.setTrmRqstComt( data.getTrmRqstComt() );
         requestM.setTrmRqstDueDt(LocalDate.now());
         requestM.setTrmRqstOwnGuid(data.getTrmRqstOwnGuid());
         requestM.setTrmRqstStd(data.getTrmRqstStd());
         requestM.setTrmRqstTypeCd(data.getTrmRqstTypeCd());
         requestM.setUpdDt(LocalDate.now());
         requestM.setUpdGuid("system");
         requestService.requestMSave(requestM);

    }


}