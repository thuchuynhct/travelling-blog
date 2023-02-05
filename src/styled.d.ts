import "styled-components";
import { theme } from "./styled/StyledTheme";

type CustomTheme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
}
