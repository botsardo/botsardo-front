import Image from 'next/image';
import sad from 'assets/icons/sad.svg';
import { colors } from 'styles/globals';
import Button from 'components/Button';

export default function EmptyState() {
    const buttonProps = { text: '¡Comenzá!', color: colors.ocean };

    return (
        <>
            <div>
                <Image src={sad} width={177} height={177} />
                <p>
                    No tenés ningún <strong>botsardo</strong> activo
                </p>
                <Button {...buttonProps} />
            </div>
            <style jsx>
                {`
                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                    }

                    div > p {
                        color: ${colors.white};
                        font-size: 40px;
                        line-height: 48px;
                    }
                `}
            </style>
        </>
    );
}
