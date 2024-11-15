const Button = ({ label, link }) => {
    return (
        <a rel="noopener noreferrer" target="blank" href={link} className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">{label}</a>
    )
}

export default Button;