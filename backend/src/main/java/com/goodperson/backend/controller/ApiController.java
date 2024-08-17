package com.goodperson.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.goodperson.backend.request.RequestM;
import com.goodperson.backend.request.RequestMRepository;
import com.goodperson.backend.request.RequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
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

        Map<String, Object> map = new HashMap<>();
        map.put("message", "Welcome. I am Spring boot Server");
        return requestM;
    }
}