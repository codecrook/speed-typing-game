import { useState, useEffect, useRef } from 'react';

export default function useWordGame(startingTime = 10) {

    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textAreaRef = useRef(null);

    const handleChange = e => setText(e.target.value);
    const calculateWordCount = text => text.trim().split(' ').filter(Boolean).length;

    const startGame = () => {
        setIsTimeRunning(true);
        setTimeRemaining(startingTime);
        setText("");
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
    };

    const endGame = () => {
        setIsTimeRunning(false);
        setWordCount(calculateWordCount(text));
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => setTimeRemaining(t => t - 1), 1000)
        } else {
            endGame();
        }
    }, [timeRemaining, isTimeRunning]);

    return { textAreaRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount };
}