INSERT INTO public.ttrm_trm_rqst_m(trm_rqst_no, trm_rqst_type_cd, trm_rqst_tlt, trm_rqst_due_dt, trm_rqst_comt,
                                   trm_rqst_std, trm_rqst_own_guid, fnl_due_dt, reg_guid, reg_dt, upd_guid, upd_dt)
VALUES (1, 'TRM_UPDT', 'us , kr pp,tnc 약관 업데이트', now(), '미국 ,한국 약관이 변경 되어 5월에 배포 필요', 'scheduling',
        'bsm1kgu5sj', null, 'bsm1kgu5sj', now(), 'bsm1kgu5sj', now());

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'tnc', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'pp', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'main_common', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'sub_common', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'pp_sub1', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'viewing', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'syncplus', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'rm', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'service_request', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'rm_pn', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'frame', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'frame_privacy', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_ITM_L (trm_rqst_no, TRM_ITM, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_NO_SEQ.CURRVAL, 'presence', 'bsm1kgu5sj', sysdate, 'bsm1kgu5sj', sysdate);

INSERT INTO TTRM_TRM_RQST_CNTR_L (TRM_RQST_CNTR_NO, TRM_RQST_NO, YEAR_CD, DVC_CD, MDL_GRP_NO, CNTR_CD, DPLY_STD,
                                  RQST_STD, OWN_GUID, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_CNTR_NO_SEQ.NEXTVAL, TRM_RQST_NO_SEQ.CURRVAL, 2023, 'TV', 78, 'KR', '', '', 'bsm1kgu5sj', 'bsm1kgu5sj',
        SYSDATE, 'bsm1kgu5sj', SYSDATE);

INSERT INTO TTRM_TRM_RQST_CNTR_L (TRM_RQST_CNTR_NO, TRM_RQST_NO, YEAR_CD, DVC_CD, MDL_GRP_NO, CNTR_CD, DPLY_STD,
                                  RQST_STD, OWN_GUID, REG_GUID, REG_DT, UPD_GUID, UPD_DT)
VALUES (TRM_RQST_CNTR_NO_SEQ.NEXTVAL, TRM_RQST_NO_SEQ.CURRVAL, 2023, 'TV', 78, 'US', '', '', 'bsm1kgu5sj', 'bsm1kgu5sj',
        SYSDATE, 'bsm1kgu5sj', SYSDATE);

COMMIT;