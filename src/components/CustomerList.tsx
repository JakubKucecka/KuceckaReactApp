import React, { Component } from 'react';
import { CheckBox, Text, DataTable, Heading, Box } from "grommet";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { requestOptions } from './dataBank';

export class CustomerList extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get('https://prompt-bonefish-15.hasura.app/api/rest/getAllCustomers', requestOptions)
            .then(res => {
                const customers = res.data.Customer;
                this.setState({ customers });
            })
    }

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
                            property: 'birth_day',
                            header: <Text>Date</Text>,
                        },
                        {
                            align: 'center',
                            property: 'vip',
                            header: <Text>VIP</Text>,
                            render: customer => (
                                <CheckBox
                                    checked={customer['vip']}
                                />
                            ),
                        },
                        {
                            align: 'center',
                            property: 'numberOfOrders',
                            header: <Text>Number of orders</Text>,
                            render: customer => (
                                <Text>{customer['Orders_aggregate']['aggregate']['count']}</Text>
                            ),
                        },
                        {
                            align: 'center',
                            property: '',
                            header: <Text>Detail</Text>,
                            render: customer => (
                                <Link to={"/" + customer['id']}>Show</Link>
                            ),
                        }
                    ]}
                    data={this.state.customers}
                />
            </Box>
        );
    }
}