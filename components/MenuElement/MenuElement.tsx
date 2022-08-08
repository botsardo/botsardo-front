import Image from 'next/image';
import { colors, fonts } from 'styles/globals';

export default function MenuElement({
    location,
    icon,
    text,
    showText,
}: {
    location?: string;
    icon: string;
    text: string;
    showText: boolean;
}) {
    return (
        <a href={location} className={showText ? 'show' : 'hide'}>
            <Image
                data-testid="menu-element-svg"
                className="icon"
                src={icon}
                width={50}
                height={50}
            ></Image>
            <span data-testid="menu-element-text">{text}</span>

            <style jsx>
                {`
                    a {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        margin-top: 20px;
                        text-decoration: none;
                    }

                    .show span:last-child {
                        font-family: ${fonts.lato};
                        color: ${colors.white};
                        font-size: 30px;
                        margin-left: 14px;
                        animation-name: show-text;
                        animation-duration: 0.3s;
                        animation-fill-mode: forwards;
                        opacity: 0;
                    }

                    @keyframes show-text {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }

                    .hide {
                        justify-content: center;
                    }

                    .hide span:last-child {
                        display: none;
                    }
                `}
            </style>
        </a>
    );
}
