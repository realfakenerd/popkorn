<script lang="ts">
	import { goto } from '$app/navigation';
	import { userInfo } from '$lib/stores/userStore';
	import { v4 as uuid } from 'uuid';
	let pName = '';
	let pEmail = '';
	let pAge = '';
	let id = uuid();
	const submitValues = () => {
		let values = JSON.parse(`{
			"email": "${pEmail}",
			"name": "${pName}",
			"age": "${pAge}",
			"id": "${id}",
			"isLogged": "true"
		}`);
		userInfo.set(values);
		goto('/profile/');
	};
</script>

<section class="relative flex flex-wrap lg:h-screen lg:items-center">
	<div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-lg text-center">
			<h1 class="text-2xl font-bold text-primary sm:text-3xl">Start to review today!</h1>

			<p class="mt-4">Save your collections and review movies or tvshows</p>
		</div>

		<form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
			<div>
				<label for="email" class="sr-only">Email</label>

				<div class="relative">
					<input
						type="email"
						class="w-full rounded-lg border-secondary p-4 pr-12 text-sm text-gray-600 shadow-sm"
						placeholder="Enter email"
					/>

					<span class="absolute inset-y-0 right-4 inline-flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-secondary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div>
				<label for="password" class="sr-only">Password</label>
				<div class="relative">
					<input
						type="password"
						class="w-full rounded-lg border-secondary p-4 pr-12 text-sm text-gray-600 shadow-sm"
						placeholder="Enter password"
					/>

					<span class="absolute inset-y-0 right-4 inline-flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-secondary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<p class="text-sm text-gray-500">
					No account?
					<a class="underline" href="/">Sign up</a>
				</p>

				<button
					type="submit"
					class="ml-3 inline-block rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white"
				>
					Sign in
				</button>
			</div>
		</form>
	</div>

	<div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
		<div class="absolute inset-0 z-10 h-full w-full backdrop-blur-sm" />
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://image.tmdb.org/t/p/w1280/5P8SmMzSNYikXpxil6BYzJ16611.jpg"
			alt="Batman Poster"
		/>
	</div>
</section>
