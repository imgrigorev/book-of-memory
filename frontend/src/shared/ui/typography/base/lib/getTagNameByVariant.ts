import { ETypographyVariant } from '../ui/TypographyBase.types.ts';

export const getTagNameByVariant = (variant: ETypographyVariant) => {
  switch (variant) {
    case ETypographyVariant.CODE:
      return 'code';
    case ETypographyVariant.LINK:
      return 'a';
    case ETypographyVariant.HEADLINE1:
    case ETypographyVariant.HEADLINE2:
    case ETypographyVariant.HEADLINE3: {
      return `h${variant[variant.length - 1]}`;
    }
    case ETypographyVariant.PARAGRAPH:
    default:
      return 'p';
  }
};
