package com.deliver.delivery.resources;

import com.deliver.delivery.dto.OrderDTO;
import com.deliver.delivery.repositories.OrderRepository;
import com.deliver.delivery.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderResource implements Serializable {
    private static final long serialVersionUID = 1l;

    @Autowired
    private OrderService service;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll(){
        List<OrderDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

}
