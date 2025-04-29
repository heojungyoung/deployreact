package com.goodperson.backend.request;

import com.goodperson.backend.request.Dto.RequestItemDto;
import com.goodperson.backend.request.Dto.RequestMDto;
import com.goodperson.backend.request.entity.RequestItemL;
import com.goodperson.backend.request.entity.RequestM;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RequestService {

    private static final Logger logger = LoggerFactory.getLogger(RequestService.class);

    private final RequestMRepository requestMRepository;
    private final RequestItemLRepository requestItemLRepository;

    public List<RequestM> getNo() {
        Optional<List<RequestM>> RequestM = this.requestMRepository.findBy();

        return RequestM.orElse(null);
    }

    public Integer requestMSave(RequestWrapper data) {

        LocalDate now = LocalDate.now();
        logger.info(now.toString());
        RequestM requestM = RequestM.builder()
                .trmRqstTlt( data.getRequestM().getTrmRqstTlt())
                .trmRqstTypeCd(data.getRequestM().getTrmRqstTypeCd())
                .fnlDueDt(now)
                .regDt(now)
                .regGuid("system")
                .trmRqstComt(data.getRequestM().getTrmRqstComt())
                .trmRqstDueDt(now)
                .trmRqstOwnGuid(data.getRequestM().getTrmRqstOwnGuid())
                .trmRqstStd(data.getRequestM().getTrmRqstStd())
                .updDt(now)
                .updGuid("system")
                .build();

        this.requestMRepository.save(requestM);

        logger.info(requestM.getTrmRqstNo().toString());
        return requestM.getTrmRqstNo();
    }


    public RequestM getDetail(int id) {
        return this.requestMRepository.findBytrmRqstNo(id);
    }

    public void deleteRequest(int id) {
        this.requestMRepository.deleteById(id);
    }

    public void requestMItemSave(RequestWrapper data, int trmRqstNo) {

        LocalDate now = LocalDate.now();

        RequestDetailComKey requestDetailComKey = new RequestDetailComKey();
        requestDetailComKey.setTrmRqstNo(trmRqstNo);
        requestDetailComKey.setTrmItm(data.getRequestItemL().getId().getTrmItm());

        RequestItemL requestItemL = RequestItemL.builder()
                    .id(requestDetailComKey)
                    .updDt(now)
                    .updGuid("system")
                    .regDt(now)
                    .regGuid("system").build();

        this.requestItemLRepository.save(requestItemL);

    }

    // 무한 참조 방지 코드
    @Transactional(readOnly = true)
    public RequestMDto getRequestDto(Integer id) {
        RequestM entity = requestMRepository.findByIdWithItems(id)
                .orElseThrow(() -> new RuntimeException("Not found id=" + id));

        // 부모 필드 복사
        RequestMDto dto = RequestMDto.builder()
                .trmRqstNo(entity.getTrmRqstNo())
                .trmRqstTypeCd(entity.getTrmRqstTypeCd())
                .trmRqstTlt(entity.getTrmRqstTlt())
                .trmRqstDueDt(entity.getTrmRqstDueDt())
                .trmRqstComt(entity.getTrmRqstComt())
                .trmRqstStd(entity.getTrmRqstStd())
                .regDt(entity.getRegDt())
                .regGuid(entity.getRegGuid())
                .updDt(entity.getUpdDt())
                .updGuid(entity.getUpdGuid())
                .build();

        // 자식 리스트 매핑
        dto.setItems(
                entity.getRequestItemL().stream()
                        .map(item -> new RequestItemDto(
                                item.getId().getTrmRqstNo(),
                                item.getId().getTrmItm()
                        ))
                        .collect(Collectors.toList())
        );

        return dto;
    }



}
