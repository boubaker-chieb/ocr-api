import express from 'express';
import { OcrController } from '../controllers/ocr.controller';
import multer from 'multer';
import { OcrLanguage } from '~/dtos/ocr.dto';

const upload = multer({dest: 'tmp/ocr'});

const ocrRouter = express.Router();

ocrRouter.post("/ocr/scan-image", upload.single('file') ,async (_req, res) => {
    const controller = new OcrController();
    const file = _req.file as Express.Multer.File;
    const language = _req.query.language as OcrLanguage;
    console.log(language);
    const response = await controller.ScanImage(file, language);
    return res.send(response);
  });

  export default ocrRouter;