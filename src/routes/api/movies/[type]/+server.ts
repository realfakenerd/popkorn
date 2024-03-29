import { TMDB_KEY } from '$env/static/private';
import { load } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = async ({ params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	const url = `https://api.themoviedb.org/3/movie/${params.type}?api_key=${TMDB_KEY}&language=en-US&page=1`;
	const data = await load(url);
	return json(data);
};
