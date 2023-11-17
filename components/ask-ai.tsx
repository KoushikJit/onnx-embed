"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { Input } from "./ui/input";

type Props = {};

const AskAiComponent = (props: Props) => {
  //state
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full">
        <Input
          placeholder="start typing..."
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button variant={"default"} onClick={setupHandler}>
          Setup
        </Button>
      </div>
      <p className="text-muted-foreground">
        {answer}
      </p>
    </div>
  );

  //handler function
  async function setupHandler() {
    const response = await axios.post("api/setup", { question: question });
    setAnswer(response.data);
    console.log(response.data);
  }
};

export default AskAiComponent;
