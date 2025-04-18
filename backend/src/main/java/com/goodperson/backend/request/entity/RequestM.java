package com.goodperson.backend.request.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Setter
@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ttrm_trm_rqst_m")
public class RequestM {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TRM_RQST_NO")
    private Integer trmRqstNo;

    @Column(name = "TRM_RQST_TYPE_CD", nullable = false, length = 30)
    private String trmRqstTypeCd;

    @Column(name = "TRM_RQST_TLT", nullable = false, length = 1000)
    private String trmRqstTlt;

    @Column(name = "TRM_RQST_DUE_DT")
    private LocalDate trmRqstDueDt;

    @Column(name = "TRM_RQST_COMT")
    private String trmRqstComt;

    @Column(name = "TRM_RQST_STD", nullable = false, length = 10)
    private String trmRqstStd;

    @Column(name = "TRM_RQST_OWN_GUID", length = 100)
    private String trmRqstOwnGuid;

    @Column(name = "FNL_DUE_DT")
    private LocalDate fnlDueDt;

    @Column(name = "REG_GUID", nullable = false, length = 20)
    private String regGuid;

    @Column(name = "REG_DT", nullable = false)
    private LocalDate regDt;

    @Column(name = "UPD_GUID", nullable = false, length = 20)
    private String updGuid;

    @Column(name = "UPD_DT", nullable = false)
    private LocalDate updDt;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", referencedColumnName = "TRM_RQST_NO")
    private List<RequestRplyAtchFileL> requestRplyAtchFileL;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", referencedColumnName = "TRM_RQST_NO")
    private List<RequestRplyComt> requestRplyComt;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", referencedColumnName = "TRM_RQST_NO")
    private List<RequestItemL> requestItemL;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "TRM_RQST_NO", referencedColumnName = "TRM_RQST_NO")
    private List<RequestCntr> requestCntr;


}



