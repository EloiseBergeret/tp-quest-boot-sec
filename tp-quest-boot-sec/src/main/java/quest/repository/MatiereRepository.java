package quest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import quest.model.Filiere;
import quest.model.Matiere;

public interface MatiereRepository extends JpaRepository<Matiere, Integer> {
	@Query("select m from Matiere m where m.filiere.id = ?1")
	List<Matiere> findAllByFiliere(Integer idFiliere);
	
	@Query("select m from Matiere m where m.formateur.id=:id")
	List<Matiere> findAllByFormateurId(@Param("id") Integer id);
}
