export const load = async ({ locals }) => {
    const session = await locals.auth();
    const user = session?.user ?? null;

    return {
        user
    };
}