import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { signedAgreements } from "~/server/db/schema";

export const agreementsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      name: z.string(),
      date: z.string(),
      agreed: z.boolean(),
      email: z.string().email(),
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(signedAgreements).values({
        clientName: input.name,
        clientEmail: input.email,
        signedDate: new Date(input.date),
        agreementText: "Version 1.0"
      });
      return { success: true };
    }),
});