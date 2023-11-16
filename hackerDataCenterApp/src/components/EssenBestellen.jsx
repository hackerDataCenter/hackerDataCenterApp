import React, { useState } from 'react';
import { menuItems } from './Menüarray.jsx';

export const EssenBestellen = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const randomFoodOrder = () => {
        const randomIndex = Math.floor(Math.random() * menuItems.length);
        const randomItem = menuItems[randomIndex];

        setSelectedOrder(randomItem);
    };

    return (
        <div>
            <button onClick={randomFoodOrder}>Bestellen</button>

            {selectedOrder && (
                <div>
                    <h2>{selectedOrder.name}</h2>
                    <p>{selectedOrder.description}</p>
                    <p>Preis: {selectedOrder.price} €</p>
                    {/* Weitere Informationen anzeigen, falls erforderlich */}
                </div>
            )}
        </div>
    );
};
 
    