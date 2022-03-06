const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': '0zPB4bkEu1N0hcSwg8UqLlOVb0lSsPhRY8A7kvF1jMJv7vLb7G0ALOPMpRYWyKK3'
    }
};

const customers: Customer[] = [
    {
        'id': 1,
        'name': "Jakub",
        'date': "2022-03-03",
        'vip': true,
        'numberOfOrders': 5
    },
    {
        'id': 2,
        'name': "Ivan",
        'date': "2021-03-03",
        'vip': false,
        'numberOfOrders': 0
    },
    {
        'id': 3,
        'name': "Peter",
        'date': "2020-03-03",
        'vip': true,
        'numberOfOrders': 52
    },
];

const orders: Order[] = [
    {
        'id': 1,
        'date': "2022-03-03",
        'amount': 50,
        'numberOfItems': 5,
        'customer_id': 1
    },
    {
        'id': 2,
        'date': "2021-03-03",
        'amount': 30,
        'numberOfItems': 0,
        'customer_id': 1
    },
    {
        'id': 3,
        'date': "2020-03-03",
        'amount': 100,
        'numberOfItems': 52,
        'customer_id': 1
    },
    {
        'id': 4,
        'date': "2022-03-03",
        'amount': 50,
        'numberOfItems': 5,
        'customer_id': 2
    },
    {
        'id': 5,
        'date': "2021-03-03",
        'amount': 30,
        'numberOfItems': 0,
        'customer_id': 2
    },
    {
        'id': 6,
        'date': "2020-03-03",
        'amount': 100,
        'numberOfItems': 52,
        'customer_id': 3
    },
];

export function getAllCustomers() {
    // fetch('https://prompt-bonefish-15.hasura.app/api/rest/getAllCustomers', requestOptions)
    //     .then(response => response.json())
    //     .then(data => customers = data);

    return customers;
}

export function getCustomerWithOrders(customerId: number | undefined) {

    // fetch('https://prompt-bonefish-15.hasura.app/api/rest/getCustomerWithOrders/' + customerId, requestOptions)
    //     .then(response => response.json())
    //     .then(data => customer = data);

    let fullCustomers: FullCustomer = {
        'customer': customers.find(c => c.id === customerId),
        'orders': orders.filter(o => o.customer_id === customerId),
    }

    return fullCustomers;
}

export function getOrderCount(customerId: number) {
    let count = 0;

    fetch('https://prompt-bonefish-15.hasura.app/api/rest/getCountOrdersForCustomer/' + customerId, requestOptions)
        .then(response => response.json())
        .then(data => count = data.count);

    return count;
}

export function getItemCount(orderId: number) {
    let count = 0;

    fetch('https://prompt-bonefish-15.hasura.app/api/rest/getCountOfItemsInOrder/' + orderId, requestOptions)
        .then(response => response.json())
        .then(data => count = data.count);

    return count;
}