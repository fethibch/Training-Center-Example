package com.wind.projet.controllers;

import com.wind.projet.entities.Etudiants;
import com.wind.projet.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
public class EtudiantController {
    @Autowired
    private EtudiantRepository etudiantRepository;

    @GetMapping("/etudiant")
    public List<Etudiants> getallEtudiant() {
        return etudiantRepository.findAll();
    }

    @GetMapping("/etudiant/{id}")
    public Optional<Etudiants> getEtudiant(@PathVariable (value = "id") Long id){
        return etudiantRepository.findById(id);
    }

    @PostMapping("/etudiant")
    public void ajouterEtudiant(@RequestBody Etudiants etudiant) {
        etudiantRepository.save(etudiant);
    }

    @PutMapping("/etudiant")
    public void update(@RequestBody Etudiants etudiant) {
        etudiantRepository.save(etudiant);
    }

    @DeleteMapping("/etudiant/{id}")
    public void delete(@PathVariable Long id ){
        etudiantRepository.deleteById(id);

}}
