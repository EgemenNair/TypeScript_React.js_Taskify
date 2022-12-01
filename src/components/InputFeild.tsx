import React, { useRef } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

function InputFeild({ todo, setTodo, handleAdd }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => { 
            handleAdd(e)
            inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="input"
                placeholder="Enter a task"
                className="input_box"
            ></input>
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    );
}

export default InputFeild;
