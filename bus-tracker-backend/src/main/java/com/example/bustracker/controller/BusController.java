package com.example.bustracker.controller;

import com.example.bustracker.model.BusLocation;   // ✅ FIXED
import com.example.bustracker.repository.BusLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BusController {

    @Autowired
    private BusLocationRepository busRepository;

    // API to get bus location
    @GetMapping("/bus/{busNumber}")
    public BusLocation getBusLocation(@PathVariable String busNumber) {
        return busRepository.findByBusNumber(busNumber);
    }

    // API to update bus location
    @GetMapping("/bus/update")
    public BusLocation updateBusLocation(
            @RequestParam String busNumber,
            @RequestParam double latitude,
            @RequestParam double longitude) {

        BusLocation bus = busRepository.findByBusNumber(busNumber);

        if (bus == null) {
            bus = new BusLocation();
            bus.setBusNumber(busNumber);
        }

        bus.setLatitude(latitude);
        bus.setLongitude(longitude);

        return busRepository.save(bus);
    }
}