import React from 'react'
import {TableComponent} from "../../components/TableComponent"
import {SubMenu} from "../../components/SubMenu";

export function DashboardScreen() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'nowrap'
        }}>
            <div style={{minWidth: '220px'}}>
                <SubMenu/>
            </div>
            <div style={{width: '100%'}}>
                <TableComponent/>
            </div>
        </div>
    )
}


