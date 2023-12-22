const Footer = () => {
    const date = new Date();
    return (
        <footer className="footer">
            <p>© Copyright {date.getFullYear()}</p>
            <a href="mailto:yzey@gmail.com">Contact email</a>
        </footer>
    )
}
export default Footer;