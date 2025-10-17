package com.example.backend.controller;

import com.example.backend.model.City;
import com.example.backend.repository.CityRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Contrôleur REST qui expose les endpoints pour l'entité City.
 */
@RestController
@RequestMapping("/api/cities")
@CrossOrigin(origins = "*") // Autorise Angular à appeler cette API
public class CityController {

    private final CityRepository cityRepository;

    public CityController(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    // === GET : liste des villes ===
    @GetMapping
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    // === GET : une seule ville ===
    @GetMapping("/{id}")
    public City getCityById(@PathVariable Long id) {
        return cityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ville non trouvée avec id: " + id));
    }

    // === POST : ajouter une ville ===
    @PostMapping
    public City createCity(@RequestBody City city) {
        return cityRepository.save(city);
    }

    // === PUT : modifier une ville ===
    @PutMapping("/{id}")
    public City updateCity(@PathVariable Long id, @RequestBody City city) {
        City existing = cityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ville non trouvée avec id: " + id));
        existing.setName(city.getName());
        existing.setRegion(city.getRegion());
        existing.setPopulation(city.getPopulation());
        return cityRepository.save(existing);
    }

    // === DELETE : supprimer une ville ===
    @DeleteMapping("/{id}")
    public void deleteCity(@PathVariable Long id) {
        cityRepository.deleteById(id);
    }
}
