package com.goodperson.backend.request.repository;


import com.goodperson.backend.request.entity.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 9.2
public interface ProductDetailRepository extends JpaRepository<ProductDetail, Long> {

}
