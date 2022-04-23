<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import CreatePoll from "./components/createPollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./shared/Tabs.svelte";

	//tabs
	let items = ["Current Polls", "Add New Polls"];
	let activeItem = "Current Polls";

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handleAdd = (e) => {
		activeItem = "Current Polls";
	};

</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList />
	{:else if activeItem === "Add New Polls"}
		<CreatePoll on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 60px auto;
	}
</style>
