export interface Survey {
  id: string;
  text: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
}

export interface Response {
    questionId: string;
    content: string;
}
