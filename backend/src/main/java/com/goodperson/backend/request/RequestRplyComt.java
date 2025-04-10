package com.goodperson.backend.request;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "TTRM_TRM_RQST_RPLY_COMT_L")
public class RequestRplyComt {

    @Id
    @Column(name = "RPLY_COMT_NO")
    private Integer rplyComtNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", nullable = false)
    private RequestM requestM;

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
