import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import { OEM, RecognizeResult, createWorker } from "tesseract.js";

export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {
    const worker = await createWorker(language, 1, {
      langPath: 'https://tessdata.projectnaptha.com/4.0.0',
      corePath: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0',
    });
    const ret: RecognizeResult = await worker.recognize(file.buffer, {});
    await worker.terminate();
    return toOcrDTo(ret);
  }
}
