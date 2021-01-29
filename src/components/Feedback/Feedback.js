import { useState, useEffect } from 'react';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

import s from './Feedback.module.css';

export default function Feedback() {
     
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(good + neutral + bad)
    const [positivePercentage, setPositivePercentage] = useState(0)

    useEffect(() => setTotal(good + neutral + bad), [good, neutral, bad])
    useEffect(() => setPositivePercentage(Number((good / (total / 100)).toFixed(1))), [good, total])

    function onLeaveFeedback(e) {
        const name = e.currentTarget.name;

        if (name === 'good') {
            setGood(prev => prev + 1);
            return
        }

        if (name === 'neutral') {
            setNeutral(prev => prev + 1);
            return
        }

        if (name === 'bad') {
            setBad(prev => prev + 1);
            return
        }
    } 

    return (
        <div className={s.Feedback}>
            <Section className={s.SectionFeedback}>
                <h1 className={s.FeedbackTitle}>Пожалуйста, оставьте Ваш отзыв</h1>
                <FeedbackOptions handle={onLeaveFeedback}/>
            </Section>

            <Section>

                {total === 0
                    ? 
                    <Notification message='Отзывов пока нет' />
                    :
                    <Statistics statistics={{good, neutral, bad, total, positivePercentage}}/>
                }

            </Section>
        </div>

    )
}

