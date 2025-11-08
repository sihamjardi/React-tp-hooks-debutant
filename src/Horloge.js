import { useState, useEffect } from 'react';

function Horloge() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHeure(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p>Heure actuelle : {heure.toLocaleTimeString()}</p>;
}

export default Horloge;
