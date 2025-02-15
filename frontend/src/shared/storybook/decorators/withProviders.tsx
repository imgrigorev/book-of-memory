import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'app/store';
import '../../ui/tokens/index.scss';

export const withProviders = (Story: any, context: any) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    preloadedState: context.args?.initialState || {},
  });

  const { route = '/' } = context.args;

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Story {...context} />
      </MemoryRouter>
    </Provider>
  );
};
