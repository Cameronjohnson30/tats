import React from 'react';
import School from './School';

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPage: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedPage != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPage: null,
        selectedPage: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
    }
  }
  handleChangingSelectedPage = () => {
    this.setState({selectedPage: selectedPage});
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.gallery) {
      currentlyVisibleState = 
        <GalleryPage
          page = {this.state.gallery} 
          onGallery = {this.handleChangingSelectedPage} />
          buttonText = "Return to Product List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = 
        <ProductDetails 
          product = {this.state.selectedProduct} 
          onClickingDelete={this.handleDeletingProduct} 
          onClickingEdit={this.handleEditClick}
          onPurchasingProduct ={this.handlePurchasingProduct} />
          buttonText = "Return to Product List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewProductForm 
          onNewProductCreation={this.handleAddingNewProductToList} />
          buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = 
        <ProductList 
          productList={this.state.mainProductList} 
          onProductSelection={this.handleChangingSelectedProduct} />
          buttonText='Add Product';
    }
    return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}
export default SiteControl;