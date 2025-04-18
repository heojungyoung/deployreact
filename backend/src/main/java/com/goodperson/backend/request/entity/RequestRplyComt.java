package com.goodperson.backend.request.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "TTRM_TRM_RQST_RPLY_COMT_L")
public class RequestRplyComt {

    @Id
    @Column(name = "RPLY_COMT_NO")
    private Integer rplyComtNo;

    @Column(name = "RPLY_COMT_TYPE_CD")
    private String rplyComtTypeCd;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "RPLY_COMT_NO", referencedColumnName = "RPLY_COMT_NO")
    private List<com.goodperson.backend.request.entity.RequestRplyAtchFileL> RequestRplyAtchFileL;

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
