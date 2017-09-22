import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import sortBy from "sort-by";
import { Container, Grid, Button, Header, Image, Segment, List } from 'semantic-ui-react';
import { addItem } from '../actions/menus'

class RootView extends Component {

  onClickToggleSort() {
    this.props.toggleSortPosts();
  }

  onClickAddItem(menu) {
    console.log('onClickAddItem menu',menu);
    this.props.addItem(menu);
  }
  onDeleteClick(post) {
      const { id } = post;
      this.props.deletePost(id);
      this.props.history.push('/');
  }
  onChangeCategory(event, data) {
    console.log('onChangeCategory',data.value);
    const category = data.value;
    this.props.history.push(category === 'all' ? '/': `/${category}`);  
  }


  render() {
    const { menus, shoppingCart} = this.props;

    return (
      <Container>
        <Header >
          <Link to={'/'}>
            <h1>Taqueria Los Lira</h1>
          </Link>
          Total Orden : ${typeof shoppingCart.totalOrden === 'undefined' ? 0 : shoppingCart.totalOrden } Tax : {typeof shoppingCart.totalOrden === 'undefined' ? 0 : shoppingCart.totalOrden*0.0825}
        </Header>
        <Segment attached>
          <List divided relaxed>
            {menus.map( (menu) => (
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
function mapStateToProps({ menus, shoppingCart }) {
 console.log('shoppingCart',shoppingCart);

 return { menus , shoppingCart};
}
export default connect(mapStateToProps,{addItem})(RootView);
