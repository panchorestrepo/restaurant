import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import sortBy from "sort-by";
import { Container, Grid, Button, Header, Image, Segment, List } from 'semantic-ui-react';
import { addItem, emptyCart, checking } from '../actions/menus'

class RootView extends Component {

  componentDidMount() {
    const { orderStatus, emptyCart, checking} = this.props;
    console.log('componentDidMount',orderStatus)
    
    if (orderStatus === 'Received') {
      emptyCart();
      checking();
    }
  }

  onClickToggleSort() {
    this.props.toggleSortPosts();
  }

  onClickAddItem(menu) {
    console.log('onClickAddItem menu',menu);
    this.props.addItem(menu);
  }
  gotoCheckOut() {
    console.log('clicked checout button')
      this.props.history.push('/checkout');
  }
  onChangeCategory(event, data) {
    console.log('onChangeCategory',data.value);
    const category = data.value;
    this.props.history.push(category === 'all' ? '/': `/${category}`);  
  }
  calculateTotalOrden(menus, shoppingCart) {
    let totalOrden =  _.values(shoppingCart).reduce( 
      (acc, item ) => {return acc + item.qty*menus[item.id].price},
       0);
    return totalOrden;
  }

  render() {
    const { menus, shoppingCart} = this.props;

    return (
      <Container>
        <Header >
          <Link to={'/'}>
            <h1>Taqueria Los Lira</h1>
          </Link>
          <Grid>
          <Grid.Column width={8}>
            <h4>Total Orden : ${this.calculateTotalOrden(menus,shoppingCart)}</h4>
          </Grid.Column>
          <Grid.Column width={8} textAlign='right'>
            <Button onClick={this.gotoCheckOut.bind(this)} >Checkout</Button>
          </Grid.Column>

          </Grid>
        </Header>
        <Segment attached>
          <List divided relaxed>
            {Object.values(menus).map( (menu) => (
            <List.Item key={menu.id}>
                <Container>
                    <Grid columns='equal' padded={false}>
                      <Grid.Row>
                        <Grid.Column>
                           <h3>{menu.name}</h3>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                           ${menu.price}
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                           <h4>{menu.description}</h4>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                           <Button onClick={() => this.onClickAddItem(menu)}>Order</Button>
                        </Grid.Column>                        
                      </Grid.Row> 
                      <Grid.Row>
                        <Grid.Column width={10} >
                          <Image src={`/assets/images/${menu.image}`}/>
                        </Grid.Column>
                        <Grid.Column width={6} textAlign='right'>
                          Cantidad : {typeof shoppingCart[menu.id] === 'undefined' ? 0 : shoppingCart[menu.id].qty}
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                </Container>                    
            </List.Item>))}
          </List>
        </Segment> 
      </Container>
   );
  }
}
function mapStateToProps({ menus, shoppingCart, orderStatus }) {
 console.log('shoppingCart',shoppingCart);
 return { menus : _.mapKeys(menus, 'id') , shoppingCart, orderStatus};
}
export default connect(mapStateToProps,{addItem, emptyCart, checking})(RootView);
