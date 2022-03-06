import React, { Component } from 'react';
import { Box, Text, Heading, Paragraph, DataTable } from "grommet";
import axios from 'axios';
import { requestOptions } from './dataBank';

export class CustomerDetail extends Component<{ customerId?: number }> {
    state = {
        customer: {
            name: "",
            id: "",
            vip: "",
            birth_day: ""
        },
        orders: []
    };

    render() {

        axios.get('https://prompt-bonefish-15.hasura.app/api/rest/getCustomerWithOrders/' + this.props.customerId, requestOptions)
        .then(res => {
            console.log(res.data);
            const customer = res.data.Customer_by_pk;
            this.setState({ customer });
            const orders = res.data.Order_aggregate.nodes;
            this.setState({ orders });
        })

        return (
            <Box alignContent='center'>

                <Heading alignSelf='center'>
                    Customer
                </Heading>
                <Paragraph alignSelf='center'>
                    Name: {this.state.customer['name']}
                </Paragraph>
                <Paragraph alignSelf='center'>
                    Id: {this.state.customer['id']}
                </Paragraph>
                <Paragraph alignSelf='center'>
                    Date of birth: {this.state.customer['birth_day']}
                </Paragraph>
                <Paragraph alignSelf='center'>
                    VIP: {this.state.customer['vip'] ? "yes" : "no"}
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
                            property: 'oredered_at',
                            header: <Text>Ordered at</Text>,
                        },
                        {
                            align: 'center',
                            property: 'amount',
                            header: <Text>Amount</Text>,
                            render: order => (
                                <Text>{order['amount']}€</Text>
                            ),
                        },
                        {
                            align: 'center',
                            property: 'numberOfItems',
                            header: <Text>Number of items</Text>,
                        },
                    ]}
                    data={this.state.orders}
                />
            </Box>
        )
    }
}