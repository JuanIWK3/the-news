import { getLeituras } from "@/actions/leituras";

export default async function Home() {
	const leituras = await getLeituras();
	console.log(leituras);

	return (
		<div className="">
			<h1>Leituras</h1>
			<div className="">{JSON.stringify(leituras)}</div>
		</div>
	);
}
