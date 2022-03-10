import React, { FC } from 'react'
import { Props } from '../../Interfaces/IProps'


// const Footer: FC<Props> = ({ companyName, year }) => {
//     return (
//         <>
//             <span>{companyName}</span>
//             <span>{year}</span>
//         </>
//     )
// }
// export default Footer

function Footer({ companyName, year }: Props) {
    return (
        <>
            <span>{companyName}</span>
            <span>{year}</span>
        </>
    )
}

export default Footer