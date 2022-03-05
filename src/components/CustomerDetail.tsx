import React from 'react';
import { Box, Text, Heading, Paragraph, DataTable } from "grommet";

interface Props {
    customerId: number | undefined;
}

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
        'numberOfItems': 5
    },
    {
        'id': 2,
        'date': "2021-03-03",
        'amount': 30,
        'numberOfItems': 0
    },
    {
        'id': 3,
        'date': "2020-03-03",
        'amount': 100,
        'numberOfItems': 52
    },
];

function GetFullCustomer(customerId: number | undefined) {
    let fullCustomers: FullCustomer = {
        'customer': customers.find(c => c.id === customerId),
        'orders': orders
    }

    return fullCustomers;
}

export const CustomerDetail: React.FC<Props> = ({ customerId }) => {
    let customer = GetFullCustomer(customerId);

    return (
        <Box alignContent='center'>

            <Heading alignSelf='center'>
                Customer
            </Heading>
            <Paragraph alignSelf='center'>
                Name: {customer.customer?.name}
            </Paragraph>
            <Paragraph alignSelf='center'>
                Id: {customer.customer?.id}
            </Paragraph>
            <Paragraph alignSelf='center'>
                Date of birth: {customer.customer?.date}
            </Paragraph>
            <Paragraph alignSelf='center'>
                VIP: {customer.customer?.vip ? "yes" : "no"}
            </Paragraph>
            <br />
            <br />
            <Heading alignSelf='center'>
                Orders
            </Heading>
            <DataTable
                background={{
                    header: { color: 'accent-4' },
                    body: ['dark-1', 'dark'],
                }}
                columns={[
                    {
                        align: 'center',
                        property: 'id',
                        header: <Text>Id</Text>,
                    },
                    {
                        align: 'center',
                        property: 'date',
                        header: <Text>Ordered at</Text>,
                    },
                    {
                        align: 'center',
                        property: 'amount',
                        header: <Text>Amount</Text>,
                        render: order => (
                            <Text>{order.amount}€</Text>
                        ),
                    },
                    {
                        align: 'center',
                        property: 'numberOfItems',
                        header: <Text>Number of items</Text>,
                    },
                ]}
                data={customer.orders}
            />
        </Box>
    )
}