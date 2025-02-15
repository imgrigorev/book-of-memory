import { useState } from 'react';
import { Section } from 'shared/ui';
import { ESharedClassNames } from 'shared/ui/tokens/ESharedClassNames.ts';
import { EntityUser } from 'entities/user';
import { FeatureUsersProfileEdit } from 'features/users';
import { WidgetUsersProfileNavigation } from 'widgets/users';
import { getUserForProfileSelector, useAppSelector } from 'app/store';

export const UsersProfileMePage = () => {
  const user = useAppSelector(getUserForProfileSelector);

  const [selectedMenuItem, setSelectedMenuItem] = useState<string | undefined>('profile');

  if (!user) return null;

  return (
    <Section
      title="Profile"
      mainContent={
        <>
          <div className={ESharedClassNames.FLEX} data-direction="vertical">
            <EntityUser {...user} />
            <WidgetUsersProfileNavigation selected={selectedMenuItem} onSelected={setSelectedMenuItem} />
          </div>
          <div>{selectedMenuItem === 'profile' && <FeatureUsersProfileEdit />}</div>
        </>
      }
    />
  );
};
