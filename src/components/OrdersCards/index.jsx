// import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCards = props => {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex justify-between items-center mb-3 border rounded-lg border-black w-80 p-4">
            <p className="flex justify-between">
                <div className="flex flex-col ">
                    <span className="font-light">01.02.2023</span>
                    <span className="font-light">{ totalProducts } articulos</span>
                </div>
                <span className="font-medium text-2xl">$ { totalPrice }</span>
            </p>
        </div>
    );
}

export default OrdersCards