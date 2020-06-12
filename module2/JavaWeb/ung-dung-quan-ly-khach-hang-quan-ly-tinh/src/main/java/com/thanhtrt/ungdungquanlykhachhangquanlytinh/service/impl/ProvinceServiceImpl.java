package com.thanhtrt.ungdungquanlykhachhangquanlytinh.service.impl;


import com.thanhtrt.ungdungquanlykhachhangquanlytinh.model.Province;
import com.thanhtrt.ungdungquanlykhachhangquanlytinh.repository.ProvinceRepository;
import com.thanhtrt.ungdungquanlykhachhangquanlytinh.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProvinceServiceImpl implements ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public List<Province> findAll() {
        return provinceRepository.findAll();
    }

    @Override
    public Province findById(Long id) {
        return provinceRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Province province) {
        provinceRepository.save(province);
    }

    @Override
    public void remove(Long id) {
        provinceRepository.deleteById(id);
    }
}
