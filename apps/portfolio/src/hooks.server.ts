export const handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');

	if (!theme) {
		return await resolve(event);
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('class="light"', `class="${theme}"`);
		}
	});
};
