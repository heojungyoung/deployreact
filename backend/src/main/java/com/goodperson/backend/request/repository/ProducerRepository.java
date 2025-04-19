package com.goodperson.backend.request.repository;


import com.goodperson.backend.request.entity.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 9.21
public interface ProducerRepository extends JpaRepository<Producer, Long> {

}
