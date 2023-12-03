import { Line, RecognizeResult, Word } from "tesseract.js";

export interface OcrDto {
  text?: string | null;
}

export const toOcrDTo = (ocrResult: RecognizeResult): OcrDto => {
  return {
    text: ocrResult.data.text
  };
};