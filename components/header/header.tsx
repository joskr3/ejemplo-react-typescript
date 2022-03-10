import React, { FC } from 'react'
import { Props } from '../../Interfaces/IProps'


const Header: FC<Props> = ({ title }) => {
    return (
        <h1>{title}</h1>
    )
}

export default Header