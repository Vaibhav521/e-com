# E-commerce App

This is a simple React-based e-commerce web application that allows users to browse products, add them to the cart, and proceed with checkout. The application uses Redux Toolkit for state management, Tailwind CSS for styling, and supports various features like product search, sorting, and filtering.


![image](https://github.com/user-attachments/assets/8e5d0cbf-2a9a-4eac-a997-128147222446)


## Features
- **Home Page (`/`)**
  - Display a list of products.
  - Search functionality to filter products based on the title.
  - Sorting and filtering options by price and rating.
  - Skeleton loader for loading states when fetching product data.
  
- **Cart Page (`/cart`)**
  - Displays a list of products added to the cart.
  - Option to remove items from the cart.
  - Checkout modal with address input for completing the purchase.
  
- **Product Page (`/product/:id`)**
  - Display product details (image, title, price, rating).
  - Option to add product to the cart.
  - Loading skeleton displayed while the product data is fetched.

## Stack Used

- **Frontend:**
  - React with JavaScript for building the user interface.
  - Tailwind CSS for styling and responsiveness.
  - Redux Toolkit for state management.
  
- **Routing:**
  - `react-router-dom` for routing between pages (`/`, `/cart`, `/product/:id`).

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   https://github.com/Vaibhav521/e-com.git
   cd e-com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

## Features and Functionality

### 1. **Home Page**

The home page displays a list of products fetched from an API (`FakeStoreAPI`). You can search and filter the products based on price and rating. The list of products is displayed with the following details:
- Image
- Title
- Price
- Rating
- Option to add to cart

When products are being fetched, a skeleton loader is shown to improve user experience.

**Search & Filter Functionality:**
- The user can search for products by their title.
- The user can filter products by sorting them by price (`Low to High`, `High to Low`) or by rating (`Low to High`, `High to Low`).

A **custom hook** is used to handle the logic for searching, filtering, and sorting products efficiently.

### 2. **Cart Page**

The cart page displays all the items added to the cart. Each item in the cart shows:
- Product name
- Price
- Quantity
- Option to remove the item from the cart

At the bottom, there’s a **checkout modal** that allows users to enter their address for order completion. 

**Cart Features:**
- View cart items.
- Remove items from the cart.
- Checkout modal to input shipping information.

### 3. **Product Page**

The product page displays detailed information for a specific product:
- Image
- Title
- Price
- Rating
- Option to add to the cart.

The product is fetched based on the product ID (`/product/:id`). A skeleton loader is shown while the data is being fetched.

### 4. **Redux Toolkit for State Management**

The app uses **Redux Toolkit** to manage the state across different components. The product data, cart items, and the selected filter/sort options are stored globally in the Redux store.

**Actions and Slices:**
- `productSlice`: Handles actions for fetching products, selecting categories, sorting and filtering products, and managing the state of individual product details.
- `cartSlice`: Manages cart items, including adding/removing items and computing the total price.

### Custom Hook for Filtering and Sorting

We have implemented a **custom hook** (`useSortedAndFilteredProducts`) that encapsulates the logic for:
- Filtering products based on the search query.
- Sorting products based on selected criteria (price and rating).
  
This custom hook is used in the **Home Page** and **Cart Page** to keep the filtering and sorting logic modular and reusable.

### Example Usage

```js
// Using custom hook for filtering and sorting
const { filteredAndSortedProducts } = useSortedAndFilteredProducts(products, query, priceOrder, ratingOrder);
```

This makes the code cleaner and allows us to reuse the filtering and sorting logic across different pages like Home and Cart.

## Project Structure

```
src/
├── components/
│   ├── components
├── pages/
│   ├── Home.js                # Home page displaying products with search & filter.
│   ├── Cart.js                # Cart page with the list of items and checkout modal.
│   └── ProductPage.js         # Product page showing detailed info for a selected product.
├── store/
│   ├── cartSlice.js           # Redux slice for managing cart-related state.
│   ├── productSlice.js        # Redux slice for managing product-related state.
│   └── store.js               # Redux store setup and configuration.
├── hooks/
│   └── useSortedAndFilteredProducts.js # Custom hook for filtering and sorting products.
└── App.js                     # Main app with routing setup.
```

## Conclusion

This e-commerce app demonstrates how to build a responsive, feature-rich online shopping experience using React, Redux, and Tailwind CSS. It includes search, filter, cart management, and checkout functionalities, making it a great base for a more complex online store. The custom hook for filtering and sorting ensures that the code remains clean, modular, and reusable.
