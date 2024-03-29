import type { PageLoad } from './$types';

type F = (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
async function fetchData<T>(fetch: F, url: string, params: string | number): Promise<T> {
	const res = await fetch(`/api/movie/${params}/${url}`);
	return await res.json();
}

export const load = (async ({ params, fetch, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=${60 * 60}, s-maxage=${60 * 60 * 24}`
	});
	const res = await fetch(`/api/movie/${params.id}`);
	const data = (await res.json()) as Movie;

	console.log(data);
	return {
		movie: data,
		streamed: {
			credits: fetchData<Credits>(fetch, 'credits', params.id),
			reviews: fetchData<Reviews>(fetch, 'reviews', params.id),
			videos: fetchData<Videos>(fetch, 'videos', params.id),
			images: fetchData<ImagesFromApi>(fetch, 'images', params.id),
			providers: fetchData<Provider>(fetch, 'providers', params.id)
		}
	};
}) satisfies PageLoad;
