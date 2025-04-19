package com.goodperson.backend.request.repository;


import com.goodperson.backend.request.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 9.11
public interface ProviderRepository extends JpaRepository<Provider, Long> {

}
