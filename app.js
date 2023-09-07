import express  from 'express';
import bodyParser from 'body-parser';
const app = express();   

app.use(bodyParser.json());

// Define una lista de personas con habilidades
const personas = [
  { id: 1, nombre: 'Pedrito Sola', habilidades: ['hablar en público'] },
  // Agregar  más personas aquí en el tinder
];

// Ruta para buscar personas por habilidades
app.get('/buscar', (req, res) => {
  const habilidadBuscada = req.query.habilidad.toLowerCase();
  const personasConHabilidad = personas.filter((persona) =>
    persona.habilidades.includes(habilidadBuscada)
  );

  res.json(personasConHabilidad);
});

// Ruta para contratar a una persona
app.post('/contratar', (req, res) => {
  const { idPersona, horas } = req.body;

  // Simula la lógica de contratación
  // Puedes agregar tu lógica real aquí, como calcular el costo total, enviar una cotización, etc.
  const costoTotal = 30 * horas;
  const mensaje = `Contratación exitosa. Costo total: $${costoTotal}.`;

  res.json({ mensaje });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

