import React, { useState } from "react";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import { Checkbox } from "@mui/material";

export default function Quiz() {
    const qstns = [
        {
            question: 'President of India',
            answer: ['Draupathi Moormu', 'Ramnath Govindh']
        },
        {
            question: 'Prime minister of India',
            answer: ['Narendra Modi', 'Amit Shah']
        },
        {
            question: 'CM of Tamilnadu',
            answer: ['M.K. Stalin', 'Durai murugan']
        },
        {
            question: 'CM of Kerala',
            answer: ['Binarayee Vijayan', 'Umman Chandi']
        },
        {
            question: 'CM of AndraPradesh',
            answer: ['Jagan Mohan Reddy', 'Chandrababu  Naidu']
        },
        {
            question: 'CM of Karnataka',
            answer: ['Bassavaraj Bommai', 'Ediyurappa']
        },
        {
            question: 'CM of Maharastra',
            answer: ['Eknath Shinde', 'Uddhav Thakarey']
        },
        {
            question: 'CM of Rajasthan',
            answer: ['Ashok Ghelot', 'Sachin Pilot']
        },
        {
            question: 'CM of WestBengal',
            answer: ['Mamtha Banerjee', 'Mayavathi']
        },
        {
            question: 'CM of Bihar',
            answer: ['Nithishkumar Yadav', 'Lalu Prasad Yadav']
        }
    ]
    const [count, setCount] = useState(qstns)
    const [score, setScore] = useState(0)

    function increment() {
        setScore(score + 1)
    }
    console.log('Score ', score)
    return (
        <div>
            <center>
                <p>MUI</p> <br />
                {
                    count.map((el,index) => {
                        return (
                            <div key={index}>
                                <p>{el.question}</p>
                                {el.answer.map((li,index) => {
                                    return (
                                        <div key={index}>
                                            <Button variant="contained" onClick={increment}>{li}</Button> <br /> <br />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
                {/* <Button variant="text">Text</Button> <br/> <br/>
            <Button variant="contained" >Contained</Button> <br/> <br/>
            <Button variant="outlined">Outlined</Button> <br/> <br/> */}
             {/* <Checkbox>A {li}</Checkbox>
                            <Radio value='male' aria-label={li}> {li}</Radio> */}
            </center>
        </div>
    )
}