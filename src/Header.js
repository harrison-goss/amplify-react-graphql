import { Image, useTheme } from "@aws-amplify/ui-react";
import caminoIcon from './imgs/caminoLogo.png';

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="/caminoLogo_Admin.png"
      padding={tokens.space.medium}
    />
  );
}