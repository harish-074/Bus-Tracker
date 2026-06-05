package bus_tracker.service;

import bus_tracker.model.Bus;
import bus_tracker.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public Bus saveBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    public Bus getBusByNumber(int busNumber) {
        return busRepository.findById(busNumber).orElse(null);
    }
}