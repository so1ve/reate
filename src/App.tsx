import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import routes from "virtual:generated-pages-react";
import i18n from "./lib/i18n";

function App () {
  const Loading = (
    <p>
      Loading
    </p>
  );

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={Loading}>
        {useRoutes(routes)}
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
