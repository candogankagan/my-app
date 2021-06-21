import React, {useState, useCallback} from 'react'
import {Icon, Menu} from 'semantic-ui-react'

export function SubMenu() {
    const [activeItem, setActiveItem] = useState({});
    const [subUser, setSubUser] = useState(false);

    const handleItemClick = useCallback(() => {
        setSubUser(prevCheck => !prevCheck);
    }, [setSubUser])

    return (
        <Menu fixed='left' vertical style={{backgroundColor: '#4267B2'}}>
            <Menu.Item
                onClick={handleItemClick}>
                <div style={{whiteSpace: 'nowrap', display: 'inline-flex'}}>
                    <Icon size='large'
                          name='users'
                          style={{color: 'white'}}
                    />
                    <div style={{
                        alignSelf: 'center',
                        paddingLeft: '8px',
                        color: 'white',
                    }}>
                        Users
                    </div>
                </div>
                <Menu.Menu style={{marginLeft: '21px'}}>
                    {subUser &&
                    <>
                        <Menu.Item
                            name='search'
                            active={activeItem === 'search'}
                            onClick={handleItemClick}
                            style={{color: 'white'}}
                        >
                            Search
                        </Menu.Item>
                        <Menu.Item
                            name='add'
                            active={activeItem === 'add'}
                            onClick={handleItemClick}
                            style={{color: 'white'}}
                        >
                            Add
                        </Menu.Item>
                        <Menu.Item
                            name='about'
                            active={activeItem === 'about'}
                            onClick={handleItemClick}
                            style={{color: 'white'}}
                        >
                            Remove
                        </Menu.Item>
                    </>
                    }
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    )
}
