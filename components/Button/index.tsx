import { colors } from 'styles/globals';

interface ButtonProps {
    text: string;
    color: string;
    width?: number;
    height?: number;
    textColor?: string;
}

export default function Button({
    text,
    color,
    width = 350,
    height = 100,
    textColor = `${colors.white}`,
}: ButtonProps) {
    return (
        <button type="button" role="button">
            <p>{text}</p>
            <style jsx>{`
                button {
                    background-color: ${color};
                    border: none;
                    border-radius: 16px;
                    width: ${width}px;
                    height: ${height}px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                button > p {
                    color: ${textColor};
                    font-size: 45px;
                    font-weight: bold;
                }
            `}</style>
        </button>
    );
}
