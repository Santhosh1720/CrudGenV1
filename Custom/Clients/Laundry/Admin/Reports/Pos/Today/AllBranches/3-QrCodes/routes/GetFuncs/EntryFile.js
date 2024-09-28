import express from 'express';

var router = express.Router();

import {
    GetFuncs
} from '../../controllers/GetFuncs/EntryFile.js';

router.get('/', GetFuncs);
router.get('/AsIs', GetFuncs);

export { router };