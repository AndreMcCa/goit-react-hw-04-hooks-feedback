import PropTypes from 'prop-types';

import Button from '../Button';
import { Happy, Sick, Surprised } from '../../images/all-icons';

import s from  './FeedbackOptions.module.css';

export default function FeedbackOptions({handle}) {

    return (
        <div>
            <Button className={s.good} key='good-btn' type='button' name='good' onClick={handle}>
                <Happy width={50} height={50}/>
            </Button>

            <Button className={s.neutral} key='neutral-btn' type='button' name='neutral' onClick={handle}>
                <Surprised width={50} height={50}/>
            </Button>

            <Button className={s.bad} key="bad-btn" type='button' name='bad' onClick={handle}>
                <Sick width={50} height={50}/>
            </Button>
        </div>

    )
}

FeedbackOptions.propTypes = {
    handle: PropTypes.func.isRequired,
}

