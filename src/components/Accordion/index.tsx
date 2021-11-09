import { VStack, chakra, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface ItemProps {
  title: string;
  description: string;
  showDescription?: boolean;
}

interface AccordionProps {
  items: ItemProps[];
}

function AccordionItem({
  title,
  description,
  showDescription,
}: ItemProps): JSX.Element {
  const [opened, setOpened] = useState(!!showDescription);

  return (
    <chakra.div
      width="100%"
      fontSize="1.5rem"
      borderRadius="0.5rem"
      overflow="hidden"
    >
      <chakra.dt
        className="title"
        width="100%"
        textAlign="left"
        bgColor="background.light"
        color="orange.200"
        padding="1rem 2rem"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        onClick={() => setOpened(!opened)}
      >
        <chakra.div>{title}</chakra.div>
        <chakra.div
          transition="all 0.6s ease"
          transform={opened ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <Icon as={BsChevronDown} w={8} h={8} />
        </chakra.div>
      </chakra.dt>
      <chakra.dd
        width="100%"
        textAlign="left"
        bgColor="background.light"
        color="gray.200"
        padding="0"
      >
        <chakra.p
          m="0"
          bgColor="background.dark"
          maxHeight={opened ? '50rem' : '0'}
          paddingX="2rem"
          paddingY={opened ? '1rem' : '0'}
          opacity={opened ? '1' : '0'}
          transition="all 0.6s ease"
          overflow="hidden"
        >
          {description}
        </chakra.p>
      </chakra.dd>
    </chakra.div>
  );
}

export default function Accordion({ items }: AccordionProps): JSX.Element {
  return (
    <chakra.div>
      <VStack spacing="1rem">
        {items.map(item => (
          <AccordionItem
            key={item.title}
            title={item.title}
            description={item.description}
            showDescription={item.showDescription || false}
          />
        ))}
      </VStack>
    </chakra.div>
  );
}
