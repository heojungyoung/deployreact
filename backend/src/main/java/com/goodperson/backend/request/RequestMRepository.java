package com.goodperson.backend.request;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RequestMRepository extends JpaRepository<RequestM, Integer> {
    Optional<List<RequestM>> findBy();
    RequestM findBytrmRqstNo(int id);
}
