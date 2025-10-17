package com.example.backend.repository;

import com.example.backend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface d'accès aux données pour l'entité City.
 * JpaRepository fournit déjà toutes les opérations CRUD.
 */
@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    // Tu peux ajouter des requêtes personnalisées ici plus tard, ex :
    // List<City> findByRegion(String region);
}
