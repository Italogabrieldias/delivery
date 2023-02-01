package com.deliver.delivery.services;

import com.deliver.delivery.dto.ProductDTO;

import com.deliver.delivery.entities.Product;
import com.deliver.delivery.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService implements Serializable {
    private static final long serialVersionUID = 1l;

    @Autowired
    private ProductRepository repository;

    public List<ProductDTO> findAll (){
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(x -> new  ProductDTO(x)).collect(Collectors.toList());

    }

}
