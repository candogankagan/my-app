import React, {useCallback, useState} from "react";
import {
    Table,
    Grid,
    Segment,
    Header,
    Icon,
    Button,
    Modal,
    Input,
} from 'semantic-ui-react';

const users = [{
    name: 'Ali',
    email: 'alidemri@gmail.com',
    password: '32424fda'
}, {
    name: 'Veli',
    email: 'velikan@hotmail.com',
    password: 'asd12213321sda'
}, {
    name: 'Aslı',
    email: 'asliscd@gamil.com',
    password: 'asdasa879da'
}, {
    name: 'Dilay',
    email: 'aslidilascd@gami.com',
    password: '89711221d'
}, {
    name: 'Kerem',
    email: 'asliscd@gami.com',
    password: 'qwee1223'
}]

export function TableComponent() {

    const [userList, setUserList] = useState(users);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tempName, setTempName] = useState(userList[selectedIndex].name);
    const [tempEmail, setTempEmail] = useState(userList[selectedIndex].email);
    const [tempPassword, setTempPassword] = useState(userList[selectedIndex].password);

    const onEditPressed = useCallback((index) => {
        setIsOpen(true);
        setSelectedIndex(index);
        setTempName(userList[index].name);
        setTempEmail(userList[index].email);
        setTempPassword(userList[index].password);
    }, [userList, setTempName, setTempPassword, setTempEmail])

    const onEditInfoPressed = useCallback(() => {
        userList[selectedIndex].name = tempName;
        userList[selectedIndex].email = tempEmail;
        userList[selectedIndex].password = tempPassword;
        setUserList(userList);
        setIsOpen(false);
    }, [selectedIndex, tempName, tempEmail, tempPassword, userList])

    return (
        <Grid verticalAlign='middle'>
            <Grid.Column>
                <Modal
                    open={isOpen}
                    style={{color: '#4267B2'}}
                >
                    <Header style={{color: '#4267B2', marginLeft: '10px'}} icon='pencil alternate'
                            content='Rename Cells'/>
                    <Modal.Content>
                        <>
                            <Input style={{margin: '30px'}}
                                   type="text"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTempName(e.target.value)}
                                   value={tempName}
                            />
                            <Input style={{margin: '30px'}}
                                   type="text"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTempEmail(e.target.value)}
                                   value={tempEmail}
                            />
                            <Input style={{margin: '30px'}}
                                   type="text"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTempPassword(e.target.value)}
                                   value={tempPassword}
                            />
                        </>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button style={{backgroundColor: '#4267B2', color: 'white'}} onClick={onEditInfoPressed}>
                            Save
                        </Button>
                    </Modal.Actions>
                </Modal>
                <Segment>
                    <Header style={{color: '#4267B2'}}>Registered Users</Header>
                    <Table compact celled>
                        <Table.Header fullWidth>
                            <Table.Row>
                                <Table.HeaderCell style={{color: '#4267B2'}}>Name</Table.HeaderCell>
                                <Table.HeaderCell style={{color: '#4267B2'}}>Email</Table.HeaderCell>
                                <Table.HeaderCell style={{color: '#4267B2'}}>Password</Table.HeaderCell>
                                <Table.HeaderCell style={{color: '#4267B2'}}>Edit</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body style={{height: '80vh', width: '100vh'}}>
                            {userList.map((item, index) =>
                                <Table.Row key={index}>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.email}</Table.Cell>
                                    <Table.Cell>{item.password}</Table.Cell>
                                    <Table.Cell><Button style={{backgroundColor: '#4267B2', color: 'white'}}
                                                        onClick={() => onEditPressed(index)}><Icon
                                        name='edit'/></Button></Table.Cell>
                                </Table.Row>)}
                        </Table.Body>
                    </Table>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}



