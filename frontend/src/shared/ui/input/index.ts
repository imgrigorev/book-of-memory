export { EInputVariant } from './text';

import { InputText } from './text';
import { InputSearch } from './search';
import { InputPassword } from './password';
import { InputTextarea } from './textarea';

export const Input = () => {
  return null;
};

Input.Text = InputText;
Input.Search = InputSearch;
Input.Password = InputPassword;
Input.Textarea = InputTextarea;
