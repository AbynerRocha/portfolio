import * as z from 'zod/v4'

export const techsSchema = z.enum(['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'TypeScript', 'NodeJS', 'TailwindCSS', 'MySQL', 'MongoDB', 'More'])

