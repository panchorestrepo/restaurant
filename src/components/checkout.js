import _ from 'lodash';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { placeOrder } from '../actions/menus'

import { Button, Icon, Container, Grid, Segment } from 'semantic-ui-react';

class CheckOut extends Component {
    calculateTotalOrden(menus, shoppingCart) {
        let totalOrden =  shoppingCart.reduce( 
          (acc, item ) => {return acc + item.qty*menus[item.id].price},
           0);
        return totalOrden;
    }
    placeOrder(menus, order) {
        console.log('placeOrder',order);
        if (this.calculateTotalOrden(menus, order) > 0) {
            this.props.placeOrder(order)
        }
        else {
            this.props.history.push('/')
        }
    
    }

    render() {
        const { shoppingCart, menus, orderStatus } = this.props;
        return (
            <Container>
                <h2>Check out</h2>
                    {shoppingCart.map((item) => (
                        <Segment key={item.id}>
                            <Container>
                                <Grid columns='equal' padded={false}>
                                    <Grid.Row>
                                        <Grid.Column  width={8}>
                                            <h4>{menus[item.id].name}</h4>
                                        </Grid.Column>
                                        <Grid.Column>
                                            {item.qty}
                                        </Grid.Column>
                                        <Grid.Column textAlign='right'>
                                           ${menus[item.id].price}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                       </Segment>
                        ))}
                       <Segment>
                       <Container>

                        <Grid columns='equal' padded={false}>
                            <Grid.Row>
                                <Grid.Column  width={8}>
                                    <h4><strong>Total orden</strong></h4>
                                </Grid.Column>
                                <Grid.Column textAlign='right'>
                                    ${this.calculateTotalOrden(menus,shoppingCart)}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Container>
                    </Segment>
                    {(orderStatus !== 'Received') ? (
                    <Button onClick={() => this.placeOrder(menus,shoppingCart)}>Place Order</Button>
                    ) : (
                    <h4><Icon name ='heart'/>Order has been placed</h4>)}
            </Container>
        );
    }
}


function mapStateToProps({ menus, shoppingCart, orderStatus }) {
    console.log('shoppingCart',shoppingCart);
    return { menus : _.mapKeys(menus, 'id') , shoppingCart : _.values(shoppingCart), orderStatus};
}

export default connect(mapStateToProps,{placeOrder})(CheckOut)