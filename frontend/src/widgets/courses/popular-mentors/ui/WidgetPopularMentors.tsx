import { getUsersListSelector, useAppSelector } from 'app/store';
import { Section } from 'shared/ui';
import { FeatureSeeAll } from 'features/see-all';
import { EntityUser } from 'entities/user';
import { ESharedClassNames } from 'shared/ui/tokens/ESharedClassNames.ts';

export const WidgetPopularMentors = () => {
  const usersList = useAppSelector(getUsersListSelector);

  return (
    <Section
      title="Popular Mentors"
      headerContent={<FeatureSeeAll />}
      mainContent={
        <div className={ESharedClassNames.FLEX}>
          {usersList.map(item => (
            <EntityUser key={item.id} id={item.id} />
          ))}
        </div>
      }
    />
  );
};
