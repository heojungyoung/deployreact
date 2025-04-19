package com.goodperson.backend.request.repository;


import com.goodperson.backend.request.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 9.18
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
