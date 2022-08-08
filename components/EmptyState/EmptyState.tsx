import Image from 'next/image';
import sadIcon from 'assets/icons/sad.svg';
import { colors } from 'styles/globals';
import Button from 'components/Button/Button';

export default function EmptyState() {
    const buttonProps = {
        label: '¡Comenzá!',
        color: colors.ocean,
        onClick: () => {
            console.log('hola');
        },
    };

    return (
        <>
            <div data-testid="empty-state">
                <Image
                    data-testid="empty-state-svg"
                    src={sadIcon}
                    width={177}
                    height={177}
                />
                <p data-testid="empty-state-text">
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
                        font-size: 40px;
                        line-height: 48px;
                    }
                `}
            </style>
        </>
    );
}
