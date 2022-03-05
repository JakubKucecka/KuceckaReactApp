import React, { Component } from 'react';
import { CheckBox, Text, DataTable, Heading, Box } from "grommet";
import { Link } from 'react-router-dom';

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

export class CustomerList extends Component {
    render() {
        return (
            <Box>
            <Heading alignSelf='center'>
                Customers
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
                        property: 'name',
                        header: <Text>Name</Text>,
                    },
                    {
                        align: 'center',
                        property: 'date',
                        header: <Text>Date</Text>,
                    },
                    {
                        align: 'center',
                        property: 'vip',
                        header: <Text>VIP</Text>,
                        render: customer => (
                            <CheckBox
                                checked={customer.vip}
                            />
                        ),
                    },
                    {
                        align: 'center',
                        property: 'numberOfOrders',
                        header: <Text>Number of orders</Text>,
                    },
                    {
                        align: 'center',
                        property: '',
                        header: <Text>Detail</Text>,
                        render: customer => (
                            <Link to={"/" + customer.id}>Show</Link>
                        ),
                    }
                ]}
                data={customers}
            />
            </Box>
        );
    }
}