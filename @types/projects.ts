import { techsSchema } from "./tech"
import { z } from "zod"


export const projectSchema = z.object({
    name: z.string(),
    description: z.string(),
    type: z.union([z.literal('web'), z.literal('mobile')]),
    image: z.string().optional(),
    github: z.string().url(),
    deploy: z.string().url().optional(),
    techs: z.array(techsSchema)
})