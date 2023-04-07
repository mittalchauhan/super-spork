import React, { useState } from "react";
import { Button, Form, Modal, Message } from "semantic-ui-react";
import { createProject, Project } from "../../utils/API/project_API";
import { User } from "../../utils/API/user_API";

export interface CreateModalProps {
  currentUser: User;
  isOpen: boolean;
  handleClose: () => void;
}

const CreatePeople: React.FC<CreateModalProps> = (props) => {
  const { isOpen, handleClose, currentUser } = props;
  const [peopleFirstname, setName] = useState("");
  const [peopleLastname, setLName] = useState("");
  const [peoplerole, setrole] = useState("");
  
  const [peopleEmail, setemail] = useState("");

  const [projectId, setKey] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const project: Partial<Project> = {
      key: projectId,
      name: peopleFirstname,
      administrators: [currentUser.email],
    };
    const { success } = await createProject(project);
    if (success) {
      setName("");
      setLName("");
      setrole("");
     
      setemail("");

      setKey("");
      setError(false);
      handleClose();
    } else {
      setError(true);
    }
  };
  const isDisabled = !!!peopleFirstname || !!!peopleLastname || !!!peoplerole  || !!!peopleEmail ||!!!projectId;
  return (
    <Modal open={isOpen} size="mini" centered>
      <Modal.Header>Create project</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              onChange={(event) => setKey(event.target.value.toUpperCase())}
              placeholder="Id"
              label="Id"
              value={projectId}
            />
            <Form.Input
              onChange={(event) => setName(event.target.value)}
              label="First name"
              placeholder="Enter a First name"
              value={peopleFirstname}
            />
            <Form.Input
              onChange={(event) => setName(event.target.value)}
              label="Last name"
              placeholder="Enter a Last name"
              value={peopleLastname}
            />
             <Form.Input
              onChange={(event) => setName(event.target.value)}
              label="role"
              placeholder="Enter your role"
              value={peoplerole}
            />
            
             <Form.Input
              onChange={(event) => setName(event.target.value)}
              label="Email"
              placeholder="Enter your email-Id"
              value={peopleEmail}
            />
            

            <Message
              error
              header="People could not be created"
              visible={error}
            />
            <Button
              color="green"
              type="submit"
              floated="right"
              className="mb"
              disabled={isDisabled}
            >
              Create
            </Button>
          </Form>
          <Button basic color="red" onClick={() => handleClose()}>
            Cancel
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CreatePeople;
