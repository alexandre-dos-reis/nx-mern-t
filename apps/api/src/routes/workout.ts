import express from 'express';

const router = express.Router();

// Get all
router.get('/', (req, res) => res.json({ msg: 'GET workouts' }));
// Get one
router.get('/:id', (req, res) => res.json({ msg: 'GET 1 workout' }));
// Create one
router.post('/:id', (req, res) => res.json({ msg: 'CREATE 1 workout' }));
router.put('/:id', (req, res) => res.json({ msg: 'CREATE 1 workout' }));
// Delete one
router.delete('/:id', (req, res) => res.json({ msg: 'DELETE 1 workout' }));
// Update one
router.patch('/:id', (req, res) => res.json({ msg: 'UPDATE 1 workout' }));

export { router as workoutRoutes };
