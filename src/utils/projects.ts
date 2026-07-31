import { t } from 'i18next'

type Project = {
    name: string,
    description: string
    techs: string[]
    github: string
    deploy?: string 
}

export const projects: Project[] = [
    { 
        name: "EvoTraining", 
        description: "projects.evotraining.description", 
        techs: ["TypeScript", "React-Native","NodeJS", "MongoDB"], 
        github: "https://github.com/AbynerRocha/evotraining", 
    },
]

