import { MouseEventHandler } from 'react';
import { colors } from 'styles/globals';

interface ButtonProps {
    label: string;
    color: string;
    width?: number;
    height?: number;
    textColor?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    label,
    color,
    width = 350,
    height = 100,
    textColor = `${colors.white}`,
    onClick,
}: ButtonProps) {
    return (
        <button
            type="button"
            role="button"
            data-testid="button"
            onClick={onClick}
        >
            <p data-testid="button-label">{label}</p>
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
                    position: relative;
                    transition: border 0.3s;
                }

                button:hover {
                    border: 2px solid ${colors.white};
                }

                button > p {
                    color: ${textColor};
                    font-size: 45px;
                    font-weight: bold;
                    text-decoration: none;
                    width: 100%;
                }
            `}</style>
        </button>
    );
}
