import { prisma } from '../prisma/client'; 
import { Request, Response } from 'express';

// GET /surveys
export const getSurveys = async (req: Request, res: Response) => {
  try {
    const surveys = await prisma.survey.findMany({
      include: { questions: true },
    });

    res.json(surveys);
  } catch (error) {
    console.error("Error getting surveys:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : error });
  }
};

// POST /surveys
export const createSurvey = async (req: Request, res: Response) => {
  try {
    const { qualification, questions } = req.body;

    if (!qualification || !Array.isArray(questions)) {
      return res.status(400).json({ error: "Title and questions are required" });
    }

    const newSurvey = await prisma.survey.create({
      data: { 
        qualification,
        questions: {
          create: questions.map((q) => ({
            text: q.text,
          })),
        },
      },
      include: {
        questions: true,
      },
    });

    res.status(201).json(newSurvey);
  } catch (error) {
    console.error("Error creating survey:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : error });
  }
};

// POST /responses
export const createResponses = async (req: Request, res: Response) => {
  try {
    const { responses } = req.body;

    if (!Array.isArray(responses)) {
      return res.status(400).json({ error: "responses must be an array" });
    }

    for (const r of responses) {
      if (!r.questionId || !r.content) {
        return res.status(400).json({ error: "Each response must have a questionId and content" });
      }
    }

    const newAnswers = await prisma.response.createMany({
      data: responses.map((r: { questionId: string; content: string }) => ({
        questionId: r.questionId,
        content: r.content,
      })),
    });

    res.status(201).json({ message: "Responses saved successfully", newAnswers });
  } catch (error) {
    console.error("Error saving responses:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : error });
  }
};

// GET /metrics/:id
export const getMetrics = async (req: Request, res: Response) => {
  const surveyId = req.params.id;

  try {
    const questions = await prisma.question.findMany({
      where: { surveyId },
    });

    const results = await Promise.all(
      questions.map(async (question) => {
        const total = await prisma.response.count({
          where: { questionId: question.id },
        });

        return {
          question: question.text,
          totalAnswers: total,
        };
      })
    );

    res.json(results);
  } catch (error) {
    console.error("Error getting metrics:", error);
    res.status(500).json({ error: error instanceof Error ? error.message : error });
  }
};
