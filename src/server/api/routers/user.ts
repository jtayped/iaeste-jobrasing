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
