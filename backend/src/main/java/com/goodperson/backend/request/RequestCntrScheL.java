package com.goodperson.backend.request;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "TTRM_TRM_RQST_CNTR_SCHE_L")
public class RequestCntrScheL {

    @Id
    @Column(name = "SCHE_TYPE_CD", nullable = false, length = 50)
    private String scheTypeCd;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_CNTR_NO", nullable = false)
    private RequestCntr trmRqstCntr;

    @Column(name = "DUE_DT")
    private LocalDate dueDt;

    @Column(name = "ACTL_DT")
    private LocalDate actlDt;

    @Column(name = "REG_GUID", length = 50)
    private String regGuid;

    @Column(name = "REG_DT")
    private Date regDt;

    @Column(name = "UPD_GUID", length = 50)
    private String updGuid;

    @Column(name = "UPD_DT")
    private Date updDt;

}