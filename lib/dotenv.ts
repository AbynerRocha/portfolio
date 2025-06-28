import * as z from 'zod/v4';

const envSchema = z.object({
    NEXT_PUBLIC_URL: z.url(),
    NEXT_PUBLIC_API_URL: z.url()
});

export const env = envSchema.parse({
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
});