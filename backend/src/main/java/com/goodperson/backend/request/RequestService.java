package com.goodperson.backend.request;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RequestService {

    private static final Logger logger = LoggerFactory.getLogger(RequestService.class);

    private final RequestMRepository requestMRepository;

    public List<RequestM> getNo() {
        Optional<List<RequestM>> RequestM = this.requestMRepository.findBy();

        return RequestM.orElse(null);
    }

    public void requestMSave(RequestM data) {

        LocalDate now = LocalDate.now();
        logger.info(now.toString());
        RequestM requestM = RequestM.builder()
                .trmRqstTlt(data.getTrmRqstTlt())
                .trmRqstTypeCd(data.getTrmRqstTypeCd())
                .fnlDueDt(now)
                .regDt(now)
                .regGuid("system")
                .trmRqstComt(data.getTrmRqstComt())
                .trmRqstDueDt(now)
                .trmRqstOwnGuid(data.getTrmRqstOwnGuid())
                .trmRqstStd(data.getTrmRqstStd())
                .updDt(now)
                .updGuid("system")
                .build();

        this.requestMRepository.save(requestM);
    }

}
