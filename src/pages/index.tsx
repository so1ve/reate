import type { FC } from "react";

import { useAppStore } from "~/stores";

const Index: FC = () => {
  const appStore = useAppStore();
  return (
    <div>
      Count is:
      {appStore.count}
      Doubled is:
      {appStore.doubled}
      <button onClick={() => appStore.increase()}>
        Increase
      </button>
    </div>
  );
};

export default Index;
