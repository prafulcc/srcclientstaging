export function load({ locals }) {
	// Pass the region guessed by hooks.server.js down to page.data
	return {
		guessedRegion: locals.guessedRegion
	};
}
