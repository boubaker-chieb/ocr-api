import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import { RecognizeResult, createWorker } from "tesseract.js";

export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {
    const worker = await createWorker(language);
    const ret: RecognizeResult = await worker.recognize(file.buffer);
    await worker.terminate();
    return toOcrDTo(ret);
  }
}
