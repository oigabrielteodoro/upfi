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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalBody>
        <ModalContent>
          <Image
            src={imgUrl}
            maxW="900px"
            maxH="600px"
            borderRadius="6px 6px 0 0"
          />
          <ModalFooter bg="gray.800" borderRadius="0 0 6px 6px">
            <Link mr="auto" href={imgUrl} target="_blank">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
