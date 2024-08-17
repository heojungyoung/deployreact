CREATE TABLE IF NOT EXISTS public.ttrm_trm_rqst_m
(
    trm_rqst_no
    integer
    NOT
    NULL,
    trm_rqst_type_cd
    character
    varying
(
    30
) COLLATE pg_catalog."default" NOT NULL,
    trm_rqst_tlt character varying
(
    1000
) COLLATE pg_catalog."default" NOT NULL,
    trm_rqst_due_dt date,
    trm_rqst_comt character varying
(
    255
) COLLATE pg_catalog."default",
    trm_rqst_std character varying
(
    10
) COLLATE pg_catalog."default" NOT NULL,
    trm_rqst_own_guid character varying
(
    100
) COLLATE pg_catalog."default",
    fnl_due_dt date,
    reg_guid character varying
(
    20
) COLLATE pg_catalog."default" NOT NULL,
    reg_dt date NOT NULL,
    upd_guid character varying
(
    20
) COLLATE pg_catalog."default" NOT NULL,
    upd_dt date NOT NULL,
    CONSTRAINT ttrm_trm_rqst_m_pkey PRIMARY KEY
(
    trm_rqst_no
)
    );