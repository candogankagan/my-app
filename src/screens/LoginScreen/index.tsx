import React, {useCallback, useState} from 'react'
import {Form, Grid, Segment} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

export function LoginScreen() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const onSubmitPressed = useCallback(() => {
        history.push({
            pathname: '/dashboard',
        });
    }, [history])

    return (
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: '450px'}}>
                <Form onSubmit={onSubmitPressed}>
                    <Segment>
                        <Form.Input fluid icon='user'
                                    iconPosition='left'
                                    laceholder='E-mail address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Button style={{backgroundColor: '#4267B2', color: 'white'}} content='Submit'/>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

