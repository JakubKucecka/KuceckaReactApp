interface Customer {
    id: number;
    name: string;
    date: string;
    vip: boolean;
    numberOfOrders: number;
}

interface Order {
    id: number;
    date: string;
    amount: number;
    numberOfItems: number;
    customer_id: number;
}

interface FullCustomer {
    customer: Customer|undefined;
    orders: Order[];
}