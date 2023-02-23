package quest.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import quest.model.Filiere;
import quest.model.Formateur;
import quest.model.Matiere;
import quest.model.Views;
import quest.repository.FiliereRepository;
import quest.repository.FormateurRepository;
import quest.repository.MatiereRepository;

@RestController
@RequestMapping("/accueilformateur")
@CrossOrigin("*")
public class AccueilFormateurRestController {
	@Autowired
	private FormateurRepository formateurRepository;
	
	@Autowired
	private FiliereRepository filiereRepo;
	
	@Autowired
	private MatiereRepository matiereRepo;
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewFormateur.class)
	public Formateur findById(@PathVariable Integer id) {
		Optional<Formateur> optFormateur = formateurRepository.findById(id);

		return optFormateur.get();
	}

	@GetMapping("/fi/{id}")
	@JsonView(Views.ViewBase.class)
	public List<Filiere> finFiliereByIdRef(@PathVariable Integer id){

		List<Filiere> filieres = filiereRepo.findAllByReferentId(id);
		return filieres;
	}
	
	@GetMapping("/ma/{id}")
	@JsonView(Views.ViewBase.class)
	public List<Matiere> finMatiereByIdRef(@PathVariable Integer id){

		List<Matiere> matieres = matiereRepo.findAllByFormateurId(id);
		return matieres;
	}

}
