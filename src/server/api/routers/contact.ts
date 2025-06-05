import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { contactSubmissions } from "~/server/db/schema";

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const submission = await ctx.db.insert(contactSubmissions).values({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
        message: input.message,
      });

      return { success: true };
    }),
}); 