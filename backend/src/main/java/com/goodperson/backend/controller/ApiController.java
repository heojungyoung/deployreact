package com.goodperson.backend.controller;

import java.util.List;
import com.goodperson.backend.request.RequestM;
import com.goodperson.backend.request.RequestService;
import org.springframework.web.bind.annotation.*;


@RestController
public class ApiController {

    private final RequestService requestService;

    public ApiController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/request/list")
    public List<RequestM> hello() {
        List<RequestM> requestM = this.requestService.getNo();
        System.out.println(requestM);
        return requestM;
    }

    @PostMapping("/api/enroll")
    public void enroll(@RequestBody RequestM data) {
         requestService.requestMSave(data);
    }


    @GetMapping("/request/detail/{id}")
    public RequestM getDetail(@PathVariable("id") int trmRqstNo) {
        RequestM requestM = this.requestService.getDetail(trmRqstNo);
        System.out.println(requestM);
        return requestM;
    }


    @DeleteMapping("/request/delete/{id}")
    public void deleteRequest(@PathVariable("id") int trmRqstNo) {
        this.requestService.deleteRequest(trmRqstNo);
    }


}