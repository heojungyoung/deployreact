package com.goodperson.backend.request.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "TTRM_TRM_RQST_SCHE_L")
public class RequestMSche {

    @Id
    @Column(name = "SCHE_TYPE_CD")
    private String scheTypeCd;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", nullable = false)
    private RequestM trmRqst;

    @Column(name = "DUE_DT")
    private LocalDate dueDt;

    @Column(name = "ACTL_DT")
    private LocalDate actlDt;

    @Column(name = "SCHE_OWN_GUID")
    private String scheOwnGuid;

    @Column(name = "TRGT_CMPLT_CNT")
    private Integer trgtCmpltCnt;

    @Column(name = "TRGT_TOT_CNT")
    private Integer trgtTotCnt;

    @Column(name = "REG_GUID")
    private String regGuid;

    @Column(name = "REG_DT")
    private LocalDate regDt;

    @Column(name = "UPD_GUID")
    private String updGuid;

    @Column(name = "UPD_DT")
    private LocalDate updDt;

}

