import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RenderRouter } from 'app/router';
import { Providers } from 'app/core';
import 'shared/ui/tokens/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RenderRouter />
    </Providers>
  </StrictMode>,
);
