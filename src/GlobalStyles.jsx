import {Global, css} from "@emotion/react"

const GlobalStyles = () => (
    <Global
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap');

            :root {
                --primary: #b88e2f;
                --font-family: 'Poppins', sans-serif;
                --second-family: 'Montserrat', sans-serif;
            }

            body {
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 16px;
                color: #000;
                background-color: #fff;
            }

            a {
                text-decoration: none;
                color: #000;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'Poppins', sans-serif;
            }

            p {
                font-family: 'Montserrat', sans-serif;
            }
        `}
    />
);

export default GlobalStyles;