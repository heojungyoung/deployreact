package com.goodperson.backend.request;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RequestService {

    private final RequestMRepository requestMRepository;

    public List<RequestM> getNo() {
        Optional<List<RequestM>> RequestM = this.requestMRepository.findBy();

        return RequestM.orElse(null);
    }

    public void requestMSave(RequestM requestM) {
        this.requestMRepository.save(requestM);
    }

}
