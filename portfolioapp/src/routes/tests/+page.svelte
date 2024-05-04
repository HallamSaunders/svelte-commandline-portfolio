<style>
    h1 {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
    }

    p {
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    let typedChars = "";
    let index = 0;
    let typewriter: any;
    let isTyping = false;

    const typeChar = (text: string) => {
        if (index < text.length) {
            typedChars += text[index];
            index += 1;
        } else {
            stopTyping();
            return;
        }
    }

    const startTyping = (text: string) => {
        if (!isTyping) {
            isTyping = true;
            typewriter = setInterval(() => typeChar(text), 35);
        }
    }

    const stopTyping = () => {
        clearInterval(typewriter);
        isTyping = false;
    }

    onMount(() => {
        //start typing when the component is mounted
        startTyping("Welcome to my portfolio...");
    });
</script>

<main>
    <div class="header">
        <h1>{typedChars}</h1>
        <p>{typedChars}</p>
    </div>
</main>