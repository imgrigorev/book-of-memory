import { fakerEN } from '@faker-js/faker';
import { Section } from 'shared/ui';

fakerEN.seed(Date.now() ^ (Math.random() * 0x100000000));

export const PlaygroundPage = () => {
  return (
    <>
      <Section title="PlaygroundPage" mainContent={<></>} />
    </>
  );
};
