const Groq = require('groq-sdk');
const groq = new Groq({
    apiKey: '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', dangerouslyAllowBrowser: true
});
export const groqApi = async (msg: string, word: string) => {

    const chatCompletion = await groq.chat.completions.create({
    "messages": [
        { role: 'system', 
        content: 
            `You are an AI playing a guessing game. Your goal is to help the user guess a random 4-letter word by providing hints after each guess. Here are the steps you should follow:
            The AI is provided the following word: ${word}. Keep this word secret.
            When the user makes a guess:
            If the guess is correct, respond enthusiastically with congratulations (e.g., "That's it! Great job!").
            If the guess is incorrect, provide a hint about the word.
            Hints can include details such as:
            Whether the guessed word shares any letters with the target word (and their positions).
            A clue about the meaning or context of the target word (e.g., "It’s something you can find in a book").
            Information about the word's structure, like its starting letter, ending letter, or vowel/consonant count.
            "Hotter/Colder" clues based on how similar the guess is to the target word.
            Progressively make the hints more specific if the user struggles, but don’t reveal the word until it’s guessed correctly.

            Example Interaction:

            AI: "I’m thinking of a 4-letter word. Can you guess it?"
            User: "Is it PLAY?"
            AI: "Not quite! Here’s a hint: My word starts with the letter 'B'."
            User: "Is it BALL?"
            AI: "Good guess! But here’s another hint: My word rhymes with 'CALL'."
            User: "Is it BELL?"
            AI: "Close, but not quite! Here's a final hint: You ring it when you’re at the door."
            User: "Is it BELL?"
            AI: "Yes! You got it! Great job!"
            Let’s play! Think of your first guess.` 
        },
        { role: 'user', content: msg },
    ],
    "model": "llama3-8b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null,
    
  });

  console.log(chatCompletion.choices[0].message.content);

    return chatCompletion.choices[0].message.content;
}