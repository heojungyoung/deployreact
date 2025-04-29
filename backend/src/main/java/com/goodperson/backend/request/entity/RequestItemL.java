package com.goodperson.backend.request.entity;

import com.goodperson.backend.request.RequestDetailComKey;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TTRM_TRM_RQST_ITM_L")
public class RequestItemL {

    @EmbeddedId
    private RequestDetailComKey id;

    @Column(name = "REG_GUID")
    private String regGuid;

    @Column(name = "UPD_GUID")
    private String updGuid;

    @Column(name = "REG_DT", nullable = false)
    private LocalDate regDt;

    @Column(name = "UPD_DT", nullable = false)
    private LocalDate updDt;


}