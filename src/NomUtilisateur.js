import useLocalStorage from './useLocalStorage';

function NomUtilisateur() {
  const [nom, setNom] = useLocalStorage('nomUtilisateur', '');

  return (
    <div>
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrez votre nom..."
      />
      <p>Bonjour : {nom}</p>
    </div>
  );
}

export default NomUtilisateur;
