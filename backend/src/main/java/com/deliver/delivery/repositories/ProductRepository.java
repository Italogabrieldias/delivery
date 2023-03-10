package com.deliver.delivery.repositories;

import com.deliver.delivery.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <Product, Long> {
    List<Product> findAllByOrderByNameAsc();

}
