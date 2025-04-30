package com.goodperson.backend.controller;

import java.util.List;

import com.goodperson.backend.request.Dto.RequestMDto;
import com.goodperson.backend.request.entity.RequestM;
import com.goodperson.backend.request.RequestService;
import com.goodperson.backend.request.RequestWrapper;
import org.springframework.web.bind.annotation.*;


@RestController
public class ApiController {

    private final RequestService requestService;

    public ApiController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/api/test")
    public String test() {
        return "ok";
    }

    @GetMapping("/request/list")
    public List<RequestM> hello() {
        List<RequestM> requestM = this.requestService.getNo();
        System.out.println(requestM);
        return requestM;
    }

    @PostMapping("/api/enroll")
    public void enroll(@RequestBody RequestWrapper data) {
        int trmRqstNo = requestService.requestMSave(data);
        requestService.requestMItemSave(data, trmRqstNo);
    }

    @GetMapping("/request/detail/{id}")
    public RequestMDto getDetail(@PathVariable("id") int trmRqstNo) {
        return this.requestService.getRequestDto(trmRqstNo);
        // return this.requestService.getDetail(trmRqstNo);
    }

    @DeleteMapping("/request/delete/{id}")
    public void deleteRequest(@PathVariable("id") int trmRqstNo) {
        this.requestService.deleteRequest(trmRqstNo);
    }


}