import { RecognizeResult, createWorker } from "tesseract.js";
import fs from "fs";
import { OcrDto, toOcrDTo } from "~/dtos/ocr.dto";

export class OcrService {
  public async scanImage(file: string, language = 'eng'): Promise<OcrDto> {
    const worker = await createWorker(language);
    const ret: RecognizeResult = await worker.recognize(file);
    console.log(ret);
    await worker.terminate();
    await fs.unlinkSync(file);
    return toOcrDTo(ret);
  }
}
