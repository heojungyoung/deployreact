package com.goodperson.backend.request.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "TTRM_TRM_RQST_ATCH_FILE_L")
public class RequestRplyAtchFileL {

    @Id
    @Column(name = "TRM_RQST_ATCH_FILE_NO")
    private Integer trmRqstAtchFileNo;


    @Column(name = "RPLY_COMT_TYPE_CD")
    private String rplyComtTypeCd;

    @Column(name = "RPLY_COMT")
    private String rplyComt;

    @Column(name = "REG_GUID")
    private String regGuid;

    @Column(name = "REG_DT")
    private LocalDate regDt;

    @Column(name = "UPD_GUID")
    private String updGuid;

    @Column(name = "UPD_DT")
    private LocalDate updDt;

}
