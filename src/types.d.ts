interface Customer {
    id: number;
    name: string;
    birth_day: string;
    vip: boolean;
    numberOfOrders: number | undefined;
}

interface Order {
    id: number;
    oredered_at: string;
    amount: number;
    numberOfItems: number | undefined;
    customer_id: number;
}