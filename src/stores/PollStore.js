import { writable } from 'svelte/store';
const PollStore = writable([
    {
        id: 1,
        question: "Which is your favorite Game?",
        answerA: "Cricket",
        answerB: "Badminton",
        votesA: 5,
        votesB: 6,
    },
]);

export default PollStore;