import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getSurveys = async (req: Request, res: Response) => {
  try {
    const surveys = await prisma.encuesta.findMany({
      include: { preguntas: true },
    });

    res.json(surveys);
  } catch (error) {
    console.error('Error al obtener encuestas:', error);
    res.status(500).json({ error: 'Error al obtener encuestas' });
  }
};

export const createSurvey = async (req: Request, res: Response) => {
  try {
    const { titulo, preguntas } = req.body;

    if (!titulo || !Array.isArray(preguntas)) {
      return res.status(400).json({ error: 'Título y preguntas son requeridos' });
    }

    const newSurvey = await prisma.encuesta.create({
      data: {
        titulo,
        preguntas: {
          create: preguntas.map(p => ({
            texto: p.texto,
          })),
        },
      },
      include: {
        preguntas: true,
      },
    });

    res.status(201).json(newSurvey);
  } catch (error) {
    console.error('Error al crear encuesta:', error);
    res.status(500).json({ error: 'Error al crear encuesta' });
  }
};

