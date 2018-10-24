package com.wind.projet.controllers;

import com.wind.projet.entities.Etudiants;
import com.wind.projet.entities.Formations;
import com.wind.projet.repositories.FormationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import static org.hibernate.id.IdentifierGenerator.ENTITY_NAME;
@CrossOrigin
@RestController

public class FormationController {
    private static final String ENTITY_NAME = "formation";
    private final Logger log = LoggerFactory.getLogger(FormationController.class);
    @Autowired
    private FormationRepository formationRepository;

    @GetMapping("/formation")
    public List<Formations> getallformation() {
        return formationRepository.findAll();
    }

    @PostMapping("/formation")
    public void ajouterformation(@RequestBody Formations formations) {
        formationRepository.save(formations);
    }

    @GetMapping("/formation/{id}")
    public Optional<Formations> getformatio(@PathVariable (value = "id") Long id){
        return formationRepository.findById(id);
    }

    @PutMapping("/formation")
    public void update(@RequestBody Formations formations) {
        formationRepository.save(formations);
    }

@DeleteMapping("/formation/{id}")
    public void delete(@PathVariable Long id ){
        formationRepository.deleteById(id);
}
}
