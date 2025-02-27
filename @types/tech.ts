import { z } from 'zod'

export const techsSchema = z.enum(['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'TypeScript', 'NodeJS', 'TailwindCSS', 'MySQL', 'MongoDB', 'More'])

