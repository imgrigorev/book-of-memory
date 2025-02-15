import { FC } from 'react';
import { ISectionProps } from './Section.props.ts';
import { SectionWrapper } from './SectionWrapper.tsx';

export const Section: FC<ISectionProps> = ({ painted, title, headerContent, mainContent }) => {
  return (
    <SectionWrapper painted={painted}>
      {!!title && <SectionWrapper.Header title={title}>{headerContent}</SectionWrapper.Header>}
      {!!mainContent && <SectionWrapper.Main>{mainContent}</SectionWrapper.Main>}
    </SectionWrapper>
  );
};
