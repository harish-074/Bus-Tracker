package com.example.bustracker.repository;

import com.example.bustracker.model.BusLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusLocationRepository extends JpaRepository<BusLocation, Long> {
    BusLocation findByBusNumber(String busNumber);
}