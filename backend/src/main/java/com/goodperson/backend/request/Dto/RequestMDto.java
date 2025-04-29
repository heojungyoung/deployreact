package com.goodperson.backend.request.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RequestMDto {
    private Integer trmRqstNo;
    private String trmRqstTypeCd;
    private String trmRqstTlt;
    private LocalDate trmRqstDueDt;
    private String trmRqstComt;
    private String trmRqstStd;
    private LocalDate regDt;
    private String regGuid;
    private LocalDate updDt;
    private String updGuid;


    // 자식 DTO 리스트
    @Builder.Default
    private List<RequestItemDto> items = new ArrayList<>();
}
