import React, { useEffect } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useForm } from "@inertiajs/inertia-react";

const Delete = ({ item, isOpen, onClose }) => {
    const { data, setData, delete: destroy, processing, errors } = useForm({
        code: -1
    });

    useEffect(() => {
        if (item) {
            setData('code', item.code);
        }
    }, [item]);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(data);
        destroy(route("admin.coupons.delete", { code: data.code}), {
            onSuccess: () => onClose(),
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Supprimer un coupon</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Voulez-vous vraiment supprimer cette coupon ?
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost"  mr={3} onClick={onClose}>Fermer</Button>
                    <Button
                        colorScheme="red"
                        onClick={handleClick}
                        color="white"
                        _hover={{ bg: "red.300", }}
                        disabled={processing}
                        isLoading={processing}
                    >Supprimer</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Delete;