import express from 'express';
import * as ExampleController from '../controllers/example.controller';

const router = express.Router();

router.get('/', ExampleController.showExample);

export default router;
