import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import Tesseract from "../../node_modules/tesseract.js";

require('../../node_modules/tesseract.js-core');
export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {
   Tesseract.createWorker({
    langPath: language
   });
   console.log(language)
    const ret: any = await Tesseract.recognize(file.buffer);
    return toOcrDTo(ret);
  }
}
