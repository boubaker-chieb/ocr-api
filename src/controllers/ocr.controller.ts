import { Route, Controller, Post, UploadedFile, Tags, Query } from "tsoa";
import { OcrService } from "../services/ocr.service";

@Route("Ocr")
@Tags("Ocr")
export class OcrController extends Controller {
  @Post("scan-image")
  public async ScanImage(
    @UploadedFile() file: Express.Multer.File,
    @Query() language: string ='eng',
  ): Promise<any> {
    const ocrService = new OcrService();
    console.log(file)
    return await ocrService.scanImage(file, language);
  }
}
