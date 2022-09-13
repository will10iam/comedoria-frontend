import Modal from "react-modal"
import styles from './styles.module.scss'
import { IoIosCloseCircle } from "react-icons/io";
import { OrderItemProps } from '../../../pages/dashboard'

interface ModalOrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    order: OrderItemProps[];
    handleFinishOrder: (id: string) => void;
}


export function ModalOrder({ isOpen, onRequestClose, order, handleFinishOrder }: ModalOrderProps) {
    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#060D13'
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
                style={{ background: "#060D13", border: 0 }}
            >
                <IoIosCloseCircle size={45} color="#F6BE00" />
            </button>

            <div className={styles.container}>
                <h2>Detalhes do Pedido</h2>
                <span className={styles.table}>
                    Mesa: <strong>{order[0].order.table}</strong>
                </span>

                {order.map(item => (
                    <section key={item.id} className={styles.containerItem}>
                        <span>{item.amount} - <strong>{item.product.name}</strong></span>
                        <span className={styles.description}>{item.product.description}</span>
                    </section>
                ))}


                <button className={styles.buttonOrder} onClick={() => handleFinishOrder(order[0].order_id)}>
                    Concluir Pedido
                </button>

            </div>

        </Modal>
    )
}