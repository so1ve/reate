import type { FC } from "react";

const FourOFour: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("not-found.not-found")}
    </div>
  );
};

export default FourOFour;
