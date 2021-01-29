import PropTypes from 'prop-types';

export default function Section({ className, children }) {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

Section.propTypes = {
    className: PropTypes.string,
}