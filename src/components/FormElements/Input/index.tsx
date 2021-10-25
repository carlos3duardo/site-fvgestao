import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
  Text,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  chakra,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  error?: FieldError;
  isRequired?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, isRequired = false, ...rest }: InputProps,
  ref,
) => {
  return (
    <>
      <FormControl
        borderWidth="1px"
        borderStyle="solid"
        bgColor="#e5e5e5"
        borderRadius="99px"
        padding=".75rem 1.5rem"
        filter="drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
        display="flex"
        flexDirection="row"
      >
        <ChakraInput
          id={name}
          name={name}
          placeholder={label}
          type="text"
          variant="unstyled"
          width="100%"
          size="lg"
          ref={ref}
          {...rest}
        />
        {isRequired && (
          <Text as="span" color="primary.500" pl={1}>
            *
          </Text>
        )}
        {!!error && <chakra.div>Erro</chakra.div>}
      </FormControl>
    </>
  );
};

export const Input = forwardRef(InputBase);
