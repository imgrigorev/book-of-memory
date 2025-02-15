import { Section } from 'shared/ui';
import { FeatureSeeAll } from 'features/see-all';

export const WidgetPopularCourses = () => {
  return <Section title="Top Courses" headerContent={<FeatureSeeAll />} mainContent={<div></div>} />;
};
