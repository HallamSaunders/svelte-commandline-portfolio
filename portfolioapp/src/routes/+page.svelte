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
</style>

<script lang="ts">
    let command = "";
    let response = "";
    let commandList = ["help", "contact", "projects", "interests", "bio"];

    function handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        command = inputElement.value;
    }

    function handleSubmit() {
        for (let i = 0; i < commandList.length; i++) {
            let valid = false;
            if (command === commandList[i]) valid = true;
            if (!valid) {
                response = "Please enter a valid command."
            }
        }
        
        switch (command) {
            case "help":

        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    function commandExecuter() {
        while (true) {

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
</main>