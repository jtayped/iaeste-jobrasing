import { createTRPCRouter, protectedProcedure } from "../trpc";

export const organisationRouter = createTRPCRouter({
  myOrganisations: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const organisations = await ctx.db.organisation.findMany({
      where: { participants: { some: { id: userId } } },
    });
    return organisations;
  }),
});
