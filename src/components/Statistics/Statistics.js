import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function Statistics({ statistics }) {
    
    const { good, neutral, bad, total, positivePercentage } = statistics;

    return (
        <ul className={s.list}>
            <li className={s.item} key='ilem-good'>Хорошо: {good}</li>
            <li className={s.item} key='ilem-neutral'>Сойдёт: {neutral}</li>
            <li className={s.item} key='ilem-bad'>Можно лучше: {bad}</li>  
            <li className={s.item} key='ilem-total'>Всего: {total}</li>
            {total > 0 && <li key='ilem-positivePercentage'>Положительных отзывов: {positivePercentage}%</li>}
        </ul>
    )
}

Statistics.propTypes = {
    statistics: PropTypes.objectOf(PropTypes.number).isRequired,
}

