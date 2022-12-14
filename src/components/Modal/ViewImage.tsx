import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalBody p={0}>
          <Image maxH="600px" maxW="900px" h="full" w="full" src={imgUrl} />
        </ModalBody>

        <ModalFooter
          w="full"
          background="pGray.800"
          h="32px"
          roundedBottomLeft="6px"
          roundedBottomRight="6px"
        >
          <Link href={imgUrl} target="_blank" color="white" w="full">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
