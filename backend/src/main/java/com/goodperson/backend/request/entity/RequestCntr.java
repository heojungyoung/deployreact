package com.goodperson.backend.request.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "TTRM_TRM_RQST_CNTR_L")
public class RequestCntr {

    @Id
    @Column(name = "TRM_RQST_CNTR_NO")
    private Integer trmRqstCntrNo;

    @Column(name = "YEAR_CD")
    private String yearCd;

    @Column(name = "DVC_CD")
    private String dvcCd;

    @Column(name = "MDL_GRP_NO")
    private Integer mdlGrpNo;

    @Column(name = "CNTR_CD")
    private String cntrCd;

    @Column(name = "DPLY_STD")
    private String dplyStd;

    @Column(name = "RQST_STD")
    private String rqstStd;

    @Column(name = "OWN_GUID")
    private String ownGuid;

    @Column(name = "REG_GUID")
    private String regGuid;

    @Column(name = "REG_DT")
    private LocalDate regDt;

    @Column(name = "UPD_GUID")
    private String updGuid;

    @Column(name = "UPD_DT")
    private LocalDate updDt;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_CNTR_NO", referencedColumnName = "TRM_RQST_CNTR_NO")
    private List<RequestCntrScheL> requestCntrScheL;

}
