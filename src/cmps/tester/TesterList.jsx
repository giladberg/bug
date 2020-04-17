import React from 'react'
import TesterPreview from './TesterPreview'
export default function TesterList(props) {
        const onSetSortBy=(sortingBy)=>{
            props.onSetSortBy(sortingBy)
        }
    return (
        <table className="tester-list " >
            <thead className="">
                <tr>
                    <th 
                    onClick={onSetSortBy.bind(null,'firstName')} 
                    className="pointer" 
                    >
                        First Name</th>
                    <th 
                    onClick={onSetSortBy.bind(null,'lastName')}
                    className="pointer"
                    >
                        Last Name</th>
                    <th 
                     onClick={onSetSortBy.bind(null,'country')}
                    className="pointer"
                    >
                        Country</th>
                    <th >Device</th>
                    <th >Bugs</th>
                </tr>
            </thead>
            <tbody>
                {props.testers.map((tester, i) => <TesterPreview key={i} tester={tester}></TesterPreview>)}
            </tbody>
        </table>
    )
}