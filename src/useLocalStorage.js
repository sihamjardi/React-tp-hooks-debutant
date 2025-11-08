import { useState } from 'react';

function useLocalStorage(key, valeurInitiale) {
  const [valeur, setValeur] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : valeurInitiale;
  });

  const setValeurLocale = (nouvelleValeur) => {
    setValeur(nouvelleValeur);
    localStorage.setItem(key, JSON.stringify(nouvelleValeur));
  };

  return [valeur, setValeurLocale];
}

export default useLocalStorage;
