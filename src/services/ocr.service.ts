import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import Tesseract from "../../node_modules/tesseract.js";

import path from 'path';
const file = path.resolve(process.cwd(), '../../node_modules/tesseract.js-core/tesseract-core-simd.wasm');
export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {
   require('../../node_modules/tesseract.js-core');
   Tesseract.createWorker({
    langPath: language,
   });
   console.log(language)
    const ret: any = await Tesseract.recognize(file.buffer);
    return toOcrDTo(ret);
  }
}
