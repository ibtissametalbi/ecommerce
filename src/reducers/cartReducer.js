const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
  
        if (existingItemIndex !== -1) {
          // Item already exists, increment quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return { ...state, items: updatedItems };
        } else {
          // New item, add to the cart
          return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        }
  
      case 'REMOVE_FROM_CART':
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        return { ...state, items: filteredItems };
  
      case 'UPDATE_QUANTITY':
        const updatedItems = state.items.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        });
        return { ...state, items: updatedItems };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;