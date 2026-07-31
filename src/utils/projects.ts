import { t } from 'i18next'

export type Project = {
    name: string,
    description: string
    techs: string[]
    github: string
    deploy?: string 
}

const knownTechColors: Record<string, string> = {
  typescript: "bg-accent-tertiary/20 text-accent-tertiary",
  "react-native": "bg-accent-secondary/20 text-accent-secondary",
  nodejs: "bg-accent/20 text-accent",
  mongodb: "bg-accent-secondary/20 text-accent-secondary",
  "c#": "bg-purple-600/20 text-purple-400"
}
  
const techBadgeColors = ["bg-accent-tertiary/20 text-accent-tertiary", "bg-accent-secondary/20 text-accent-secondary ", "bg-accent/20 text-accent"]

export function getTechBadgeColor(tech: string) {
    tech = tech.toLowerCase()

    if (knownTechColors[tech]) {
        return knownTechColors[tech]
    }

    const hash = [...tech].reduce(
        (total, character) => total + character.charCodeAt(0),
        0,
    )

    return techBadgeColors[hash % techBadgeColors.length]
}

export const projects: Project[] = [
    { 
        name: "EvoTraining", 
        description: "projects.evotraining.description", 
        techs: ["TypeScript", "React-Native","NodeJS", "MongoDB"], 
        github: "https://github.com/AbynerRocha/evotraining", 
    }
]

