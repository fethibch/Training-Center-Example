package com.wind.projet.entities;

import sun.security.util.Password;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "etudiant")
public class Etudiants implements Serializable {


    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "etude")
    private String etude;



    @Column(name = "login")
    private String login;

    @Column(name = "pass")
    private String pass;

    @Column(name = "mail")
    private String mail;

@ManyToOne
@JoinColumn(name = "id_for")
    private Formations formations;

    public Formations getFormations() {
        return formations;
    }

    public void setFormations(Formations formations) {
        this.formations = formations;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEtude() {
        return etude;
    }

    public void setEtude(String etude) {
        this.etude = etude;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Etudiants etudiants = (Etudiants) o;
        return Objects.equals(id, etudiants.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}