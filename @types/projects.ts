import { techsSchema } from "./tech"
import * as z from "zod/v4"


export const projectSchema = z.object({
    name: z.string(),
    description: z.string(),
    type: z.union([z.literal('web'), z.literal('mobile')]),
    image: z.string().optional(),
    github: z.url(),
    deploy: z.url().optional(),
    techs: z.array(techsSchema)
})