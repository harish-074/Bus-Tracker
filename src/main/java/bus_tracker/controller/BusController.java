package bus_tracker.controller;

import bus_tracker.model.Bus;
import bus_tracker.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus")
public class BusController {

    @Autowired
    private BusService busService;

    @PostMapping("/save")
    public Bus saveBus(@RequestBody Bus bus) {
        return busService.saveBus(bus);
    }

    @GetMapping("/all")
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }

    @GetMapping("/{busNumber}")
    public Bus getBusByNumber(@PathVariable int busNumber) {
        return busService.getBusByNumber(busNumber);
    }
}