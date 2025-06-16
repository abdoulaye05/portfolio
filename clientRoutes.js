const express = require('express');
const { body, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/auth');
const Client = require('../models/Client');

const router = express.Router();

// Validation rules
const clientValidation = [
  body('name').notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('Email invalide'),
  body('phone').optional().isMobilePhone('fr-FR').withMessage('Numéro de téléphone invalide')
];

// GET /api/clients - Récupérer tous les clients
router.get('/', authMiddleware, async (req, res) => {
  try {
    const clients = await Client.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      success: true,
      data: clients,
      count: clients.length
    });
  } catch (error) {
    console.error('Erreur GET /clients:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur lors de la récupération des clients' 
    });
  }
});

// GET /api/clients/:id - Récupérer un client spécifique
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const client = await Client.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      }
    });
    
    if (!client) {
      return res.status(404).json({ 
        success: false,
        error: 'Client non trouvé' 
      });
    }
    
    res.json({
      success: true,
      data: client
    });
  } catch (error) {
    console.error('Erreur GET /clients/:id:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur lors de la récupération du client' 
    });
  }
});

// POST /api/clients - Créer un nouveau client
router.post('/', authMiddleware, clientValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }
    
    const client = await Client.create({
      ...req.body,
      userId: req.user.id
    });
    
    res.status(201).json({
      success: true,
      data: client,
      message: 'Client créé avec succès'
    });
  } catch (error) {
    console.error('Erreur POST /clients:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur lors de la création du client' 
    });
  }
});

// PUT /api/clients/:id - Mettre à jour un client
router.put('/:id', authMiddleware, clientValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }
    
    const client = await Client.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      }
    });
    
    if (!client) {
      return res.status(404).json({ 
        success: false,
        error: 'Client non trouvé' 
      });
    }
    
    await client.update(req.body);
    
    res.json({
      success: true,
      data: client,
      message: 'Client mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur PUT /clients/:id:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur lors de la mise à jour du client' 
    });
  }
});

// DELETE /api/clients/:id - Supprimer un client
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const client = await Client.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      }
    });
    
    if (!client) {
      return res.status(404).json({ 
        success: false,
        error: 'Client non trouvé' 
      });
    }
    
    await client.destroy();
    
    res.json({
      success: true,
      message: 'Client supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur DELETE /clients/:id:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur lors de la suppression du client' 
    });
  }
});

module.exports = router; 