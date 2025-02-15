import { Input, ChevronRightIcon } from 'shared/ui';

export const FeatureCourseFilters = () => {
  return (
    <div>
      <Input.Text placeholder="Sort by" postfixIcon={ChevronRightIcon} />
      <Input.Text placeholder="Rating" postfixIcon={ChevronRightIcon} />
      <Input.Text placeholder="Price" postfixIcon={ChevronRightIcon} />
      <Input.Text placeholder="Category" postfixIcon={ChevronRightIcon} />
    </div>
  );
};
