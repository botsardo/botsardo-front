import { NextComponentType } from 'next';

const EmptyState: NextComponentType = () => {
    return (
        <>
            <div>
                {/* ícono */}
                {/* Texto */}
                {/* Botón */}
            </div>
            <style jsx>
                {`
                    div {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </>
    );
};

export default EmptyState;
