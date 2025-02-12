import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
    return user;
  }),

  myOrganisations: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const organisations = await ctx.db.organisation.findMany({
      where: { participants: { some: { id: userId } } },
    });
    return organisations;
  }),

  findById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id }, ctx }) => {
      const user = await ctx.db.user.findUnique({ where: { id } });
      return user;
    }),

  findByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input: { name }, ctx }) => {
      const users = await ctx.db.user.findMany({
        where: { name: { contains: name } },
      });
      return users;
    }),
});
