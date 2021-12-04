import { Button } from '@chakra-ui/react';

interface SubmitProps {
  label: string;
  isLoading: boolean;
}

export default function SubmitButton({
  label,
  isLoading,
}: SubmitProps): JSX.Element {
  return (
    <Button
      type="submit"
      variant="ghost"
      bgColor="background.light"
      color="gray.200"
      fontWeight="bold"
      borderRadius="99px"
      padding=".75rem 1.5rem"
      height="51px"
      width="100%"
      filter="drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25)"
      isLoading={isLoading}
      _hover={{
        backgroundColor: 'background.dark',
      }}
    >
      {label}
    </Button>
  );
}
