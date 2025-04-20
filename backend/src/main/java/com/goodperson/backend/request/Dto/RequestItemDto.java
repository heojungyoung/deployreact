package com.goodperson.backend.request.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestItemDto {

    private Integer trmRqstNo;
    private List<String> trmItm;
}
