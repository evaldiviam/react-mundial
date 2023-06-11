import express from "express";
import * as playersController from '../controllers/playersController.js';

const router = express.Router();

router.get('/players', playersController.showAllPlayers);
router.get('/players/:idPlayer', playersController.showPlayerById);
  
router.put('/players', playersController.updatePlayer);
router.delete('/players/:idPlayer', playersController.deletePlayer);

// router.post('/players', playersController.newPlayer);  
router.post("/players", playersController.upload, playersController.newPlayer)

/*
Función para imágenes privadas
app.get('/image/:imageId', (req, res) => {
    const imageId = req.params.imageId;
  
    // Retrieve the image from wherever it is stored
    const image = getImage(imageId);
  
    // Set the content type of the response to "image/jpeg" (or whatever the appropriate content type is for the image)
    res.set('Content-Type', 'image/jpeg');

    // Send the image data in the response
    res.send(image);
  });
  */

export default router;