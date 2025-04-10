package com.goodperson.backend.request;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Objects;

@Setter
@Getter
@Embeddable
@Component
public class RequestDetailComKey implements Serializable {

    @Column(name = "TRM_ITM")
    private String trmItm;

    @Column(name = "TRM_RQST_NO")
    private int trmRqstNo;

    public RequestDetailComKey() {}

    public RequestDetailComKey(String trmItm, int trmRqstNo) {
        this.trmItm = trmItm;
        this.trmRqstNo = trmRqstNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RequestDetailComKey that)) return false;
        return trmItm.equals(that.trmItm) && trmRqstNo == that.trmRqstNo;
    }

    @Override
    public int hashCode() {
        return Objects.hash(trmItm, trmRqstNo);
    }


}

