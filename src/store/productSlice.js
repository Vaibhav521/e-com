import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: {},
  categories: [],
  selectedCategory: '',
  query : '',
  priceOrder: '',
  ratingOrder: '',
};

const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { getState }) => {
    const state = getState(); 
    const { selectedCategory } = state.product; 
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}` 
      : 'https://fakestoreapi.com/products'; 
    const response = await fetch(url); const data = await response.json();
    return data;
  }
);


const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);


const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
  }
)

export { fetchProducts, fetchProduct, fetchCategories };

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setQuery : (state, action) => {
      state.query = action.payload
    },
    setPriceOrder: (state, action) => {
      state.priceOrder = action.payload;
    },
    setRatingOrder: (state, action) => {
      state.ratingOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
      //new api
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Save fetched product
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; 
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});


export const { setCategory, setQuery, setPriceOrder, setRatingOrder } = productSlice.actions;

export default productSlice.reducer;

