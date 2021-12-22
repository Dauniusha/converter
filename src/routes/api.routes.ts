import { Router } from "express";

import converter from "../controllers/converter";
import ConverterError from "../models/converter-error";

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newRate = await converter.convert(req.body);

        res.status(200).json(newRate);
    } catch(err) {
        const { code = 500, message = 'Server error, try again later' } = err as ConverterError;
        res.status(code).json({ message });
    };
});

export default router;
