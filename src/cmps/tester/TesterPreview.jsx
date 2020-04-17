import React from 'react'

export default function TesterPreview(props) {
    return (
        <tr className="testerPreview">
            <td> {props.tester.firstName}</td>
            <td> {props.tester.lastName}</td>
            <td>{props.tester.country}</td>
            <td>{props.tester.device}</td>
            <td>{props.tester.bugs.map((bug, index) => <span key={bug.id}>
                {bug.title}{index < props.tester.bugs.length - 1 && ','} </span>)}</td>

        </tr>
    )
}
