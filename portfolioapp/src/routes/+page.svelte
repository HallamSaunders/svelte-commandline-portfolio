<style>
    h1 {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        text-decoration: none;
    }

    h2 {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        text-decoration: none;
    }

    .text-input {
        display: flex;
        align-items: center;
    }

    .text-input p {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        text-decoration: none;
        margin: 0;
        margin-right: 10px;
    }

    .text-input input {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        text-decoration: none;
        background-color: transparent;
        border: transparent;
        width: 100%;
        flex: 1;
    }

    .text-output {
        display: flex;
        align-items: center;
    }

    .text-output p {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        text-decoration: none;
        background-color: transparent;
        border: transparent;
        width: 100%;
        flex: 1;
    }
</style>

<script lang="ts">
    import {onMount} from 'svelte';

    let command = "";

    //initialise all commands in map
    const commandMap = new Map<string, string>();
    commandMap.set("help", "list all the commands and their uses");
    commandMap.set("contact", "print my contact information");
    commandMap.set("projects", "retrieve all of my personal projects, and details about them");
    commandMap.set("interests", "a description of each topic and field I am passionate about");
    commandMap.set("bio", "here's a little about me");

    let responses: string[] = [];

    function handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        command = inputElement.value;
    }

    function handleSubmit() {
        let valid = false;
        let commandEntered = "";

        for (const key of commandMap.keys()) {
            if (command === key) valid = true;
            break;
        }
        if (!valid) handleCommand("!!invalidcommand!!");
        if (valid) handleCommand(command);
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    function handleCommand(commandEntered: String) {
        let response = "";
        switch (commandEntered) {
            case "!!invalidcommand!!":
                responses = [...responses, "Please enter a valid command"];
                break;
            case "help":
                for (const key of commandMap.keys()) {
                    responses = [...responses, key + ": " + commandMap.get(key)];
                }
                break;
            default:
            response = "Please enter a recognised command."
                break;
        }
    }
</script>

<main>
    <div>
        <h1>Welcome to my portfolio.</h1>
        <h2>Type the command "help" to get started.</h2>
    </div>
    <div class="text-input">
        <p>&gt;&gt;</p>
        <input on:input={handleInput} on:keydown={handleKeyDown} bind:value={command}/>
    </div>
    {#each responses as response}
        <div class="text-output">
            <p>{response}</p>
        </div>
    {/each}
</main>