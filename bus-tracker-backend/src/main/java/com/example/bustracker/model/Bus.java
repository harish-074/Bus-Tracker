package com.example.bustracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Bus {

    @Id
    private String busNumber;

    private double latitude;
    private double longitude;

    public String getBusNumber() {
        return busNumber;
    }

    public void setBusNumber(String busNumber) {
        this.busNumber = busNumber;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}