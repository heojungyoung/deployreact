package com.goodperson.backend.request.repository.support;



import com.goodperson.backend.request.entity.Product;

import java.util.List;

/**
 * 필요한 쿼리를 작성할 메소드를 정의하는 인터페이스
 */
public interface ProductRepositoryCustom {

    List<Product> findByName(String name);

}