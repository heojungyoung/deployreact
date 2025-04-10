package com.goodperson.backend.request;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "TTRM_TRM_RQST_ITM_L")
public class RequestItemL {

    @EmbeddedId
    private RequestDetailComKey id;

    @ManyToOne(fetch = FetchType.LAZY)
    private RequestM requestM;

    @Column(name = "REG_GUID")
    private String regGuid;

    @Column(name = "UPD_GUID")
    private String updGuid;

    @Column(name = "REG_DT", nullable = false)
    private LocalDate regDt;

    @Column(name = "UPD_DT", nullable = false)
    private LocalDate updDt;


}