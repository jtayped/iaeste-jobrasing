import { MAX_LIMIT } from "@/constants/config";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const organisationRouter = createTRPCRouter({
  getParticipants: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        page: z.number(),
        limit: z.number().min(1).max(MAX_LIMIT),
      }),
    )
    .query(async ({ ctx, input: { id, page, limit } }) => {
      const organisations = await ctx.db.organisation.findMany({
        where: { participants: { some: { id: ctx.session.user.id } } },
      });

      // Users can only see participants of their own org
      if (!organisations.some((o) => o.id === id)) {
        throw new Error("Not a participant of this organisation");
      }

      const [users, meta] = await ctx.db.user
        .paginate({
          where: { organisations: { some: { id } } },
        })
        .withPages({ limit, page, includePageCount: true });

      return { users, meta };
    }),
    
});
