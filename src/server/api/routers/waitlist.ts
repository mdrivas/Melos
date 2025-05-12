import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { waitlistEntries } from "~/server/db/schema";

export const waitlistRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        providerRole: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.insert(waitlistEntries).values({
        name: input.name,
        email: input.email,
        providerRole: input.providerRole || null,
      });
    }),
}); 