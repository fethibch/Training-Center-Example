package com.wind.projet.entities;

import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "formations")
public class Formations implements Serializable {


    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nameformation")
    private String name;

    @Column(name = "description")
    private String description;

    @OneToMany( mappedBy = "formations")
    private Collection<Etudiants> etudiants;

    public Collection<Etudiants> getEtudiants() {
        return etudiants;
    }

    public void setEtudiants(Collection<Etudiants> etudiants) {
        this.etudiants = etudiants;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Formations that = (Formations) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
