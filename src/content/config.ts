import { defineCollection, z} from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        readtime:z.number(),
        imagen:z.string(),
        description:z.string(),
        buy:z.object({
            spain:z.string(),
            usa:z.string(),
        }),
    })
})

export const collections = {books}