package co.simplon.modele;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "PRODUIT")
@NamedQueries({
		@NamedQuery(name = "Produit.findAll", query = " SELECT p FROM Produit p ORDER BY p.libelleProduit ") })
public class Produit {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "IDP")
	private int idP;

	@Column(name = "LIBELLE_PRODUIT", nullable = false, length = 30)
	private String libelleProduit;

	@Column(name = "RAYON", nullable = false, length = 30)
	private String rayon;

	@Column(name = "PRIX", nullable = false, length = 8)
	private double prix;

	
	public Produit(String libelleProduit, String rayon, double prix) {
		super();
		this.libelleProduit = libelleProduit;
		this.rayon = rayon;
		this.prix = prix;
	}

	public Produit() {
	}

	public int getIdP() {
		return this.idP;
	}

	public String getLibelleProduit() {
		return libelleProduit;
	}

	public void setLibelleProduit(String libelleProduit) {
		this.libelleProduit = libelleProduit;
	}

	public String getRayon() {
		return rayon;
	}

	public void setRayon(String rayon) {
		this.rayon = rayon;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	

//	@Override
//	public String toString() {
//		return "Monument [identifiant=" + identifiant + ", nom=" + nom
//				+ ", ville=" + ville + "]";
//	}
}
