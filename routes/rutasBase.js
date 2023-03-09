import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    const nombre='Enrique'
    res.render("index.ejs",{nombre});
});


export default router;