import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import { RecognizeResult } from "tesseract.js";
import Tesseract from "tesseract.js";

export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {
    const worker = await Tesseract.createWorker(language);
    const ret: RecognizeResult = await worker.recognize(file.buffer);
    await worker.terminate();
    return toOcrDTo(ret);
  }
}
