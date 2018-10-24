package com.wind.projet.repositories;

import com.wind.projet.entities.Etudiants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Repository

public interface EtudiantRepository extends JpaRepository<Etudiants , Long> {


}
