import { Section } from 'shared/ui';
import { FeatureCourseFilters } from 'features/course-filters';
import { ESharedClassNames } from 'shared/ui/tokens/ESharedClassNames.ts';
import classes from './WidgetAllCourses.module.scss';

export const WidgetAllCourses = () => {
  return (
    <Section
      title="All courses"
      mainContent={
        <div className={classes.content}>
          <FeatureCourseFilters />
          <div className={ESharedClassNames.FLEX} data-wrap={true}></div>
        </div>
      }
    />
  );
};
