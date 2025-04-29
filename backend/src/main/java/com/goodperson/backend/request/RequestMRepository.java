package com.goodperson.backend.request;

import com.goodperson.backend.request.entity.RequestM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RequestMRepository extends JpaRepository<RequestM, Integer> {
    Optional<List<RequestM>> findBy();
    RequestM findBytrmRqstNo(int id);

    @Query("SELECT DISTINCT m FROM RequestM m LEFT JOIN FETCH m.requestItemL WHERE m.trmRqstNo = :id")
    Optional<RequestM> findByIdWithItems(@Param("id") Integer id);
}
