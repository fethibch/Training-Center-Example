package com.wind.projet.repositories;

import com.wind.projet.entities.Formations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormationRepository extends JpaRepository<Formations,Long> {
}
