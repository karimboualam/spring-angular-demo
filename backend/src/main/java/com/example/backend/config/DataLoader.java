package com.example.backend.config;

import com.example.backend.model.City;
import com.example.backend.repository.CityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final CityRepository cityRepository;

    public DataLoader(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public void run(String... args) {
        if (cityRepository.count() == 0) {
            cityRepository.save(new City("Paris", "Île-de-France", 2148000));
            cityRepository.save(new City("Lyon", "Auvergne-Rhône-Alpes", 513275));
            cityRepository.save(new City("Marseille", "Provence-Alpes-Côte d’Azur", 861635));
            System.out.println("✅ Données de test insérées !");
        }
    }
}
