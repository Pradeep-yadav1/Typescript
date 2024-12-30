import { string, z } from 'zod';
import express  from 'express'

const app = express();

const updateSchema = z.object({
    name : z.string().min(1,{message:"name can not be empty"}),
    email : z.string().email({message:"Invalid email format"})
})

type updateFinalSchema = z.infer<typeof updateSchema>;

app.put("/user",(req,res) => {
    const { success } = updateSchema.safeParse(req.body);
    const updateBody : updateFinalSchema = req.body;

    if(!success){
        res.status(411).json({
            msg :"incorrect format "
        })
        return;
    }
})