import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const themeSchema = z.object({
	theme: z.string()
});

const themeCookieName = 'theme';

export const actions = {
	setTheme: async ({ request, cookies }) => {
		const form = await superValidate(request, themeSchema);

		if (!form.valid) return fail(400, { form });
		const { theme } = form.data;

		cookies.set(themeCookieName, theme, { path: '/' });

		return { form };
	}
};

export function load({ cookies }) {
	const theme = cookies.get(themeCookieName);
	return { theme };
}
