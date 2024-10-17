import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  imageUrl: string; // Add imageUrl to the Crypto interface
}

interface CryptoState {
  data: Crypto[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CryptoState = {
  data: [],
  status: 'idle',
};

export const fetchCryptos = createAsyncThunk('crypto/fetchCryptos', async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets');

  // Map the response to include imageUrl
  const dataWithImages = response.data.data.map((crypto: Crypto) => ({
    ...crypto,
    imageUrl: `https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`, // Construct the image URL
  }));

  return dataWithImages; // Return the modified data
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload; // Set the data with images
      })
      .addCase(fetchCryptos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cryptoSlice.reducer;