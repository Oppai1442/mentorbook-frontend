import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UserActionModal: React.FC<{
    userId: number;
    actionType: string;
    onSubmit: (userId: number, input: string) => void;
    onClose: () => void;
}> = ({ userId, actionType, onSubmit, onClose }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        onSubmit(userId, inputValue);
        onClose();
    };

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Change ${actionType}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="input">
                        <Form.Label>{`Enter new ${actionType}:`}</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserActionModal;