import { Input } from 'shared/ui';
import { ESharedClassNames } from 'shared/ui/tokens/ESharedClassNames.ts';

export const FeatureUsersProfileEdit = () => {
  return (
    <div className={ESharedClassNames.FLEX} data-direction="vertical" data-gap="medium">
      <Input.Text label="Name" value="Ronald Richards" />
      <Input.Text label="Headline" value="Web developer, UX/UI Designer, and Teacher" />
      <Input.Textarea
        label="Description"
        value="Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions"
      />
      <Input.Text label="Language" value="English" />
      <Input.Text label="Links" value="byway.com" />
    </div>
  );
};
