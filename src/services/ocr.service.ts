import { OcrDto } from "src/dtos";
import { toOcrDTo } from "src/dtos/ocr.dto";
import Tesseract, { createWorker } from "tesseract.js";

import path from 'path';
const file = path.resolve(process.cwd(), '../../node_modules/tesseract.js-core/tesseract-core-simd.wasm');
export class OcrService {
  public async scanImage(file: Express.Multer.File, language = 'eng'): Promise<OcrDto> {

   const worker  = createWorker({
    langPath: language,
   });
  //  console.log(language)
  //   const ret: any = await Tesseract.recognize(file.buffer);



    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const ret: any = await worker.recognize(file.buffer);
    await worker.terminate();



    return toOcrDTo(ret);
  }
}
