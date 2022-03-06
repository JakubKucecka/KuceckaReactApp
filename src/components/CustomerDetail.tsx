import React from 'react';
import { Box, Text, Heading, Paragraph, DataTable } from "grommet";
import { getCustomerWithOrders } from './dataBank';

interface Props {
    customerId: number | undefined;
}

export const CustomerDetail: React.FC<Props> = ({ customerId }) => {
    let customer = getCustomerWithOrders(customerId);

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