import {z} from "zod";

export const signInSchema = z.object({
    identifier: z.string(), // identifier is email or username.
    password: z.string(),

})