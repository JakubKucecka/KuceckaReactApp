import React, { Component } from 'react';
import { CheckBox, Text, DataTable, Heading, Box } from "grommet";
import { Link } from 'react-router-dom';
import { getAllCustomers} from './dataBank'

export class CustomerList extends Component {
    render() {
        const customers = getAllCustomers();

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