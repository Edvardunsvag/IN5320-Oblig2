import React from 'react';
import {
    Menu,
    MenuItem,
    MenuSectionHeader,
    Table,
    TableHead,
    TableRow,
    TableRowHead,
    TableCellHead,
    TableCell,
    TableBody,
} from '@dhis2/ui';
export default function Details({ programsData, currentID }) {
    programsData = programsData.filter((item) => item.id == currentID);
    let detailsAttribute = 'details';
    return (
        <div>
            <h1>Details</h1>
            {programsData.map((item) => {
                return (
                    <Table dataTest='dhis2-uicore-table'>
                        <TableHead dataTest='dhis2-uicore-tablehead'>
                            <TableRowHead dataTest='dhis2-uicore-tablerowhead'>
                                <TableCellHead dataTest='dhis2-uicore-tablecellhead'>
                                    Key
                                </TableCellHead>
                                <TableCellHead dataTest='dhis2-uicore-tablecellhead'>
                                    Value
                                </TableCellHead>
                            </TableRowHead>
                        </TableHead>
                        <TableBody dataTest='dhis2-uicore-tablebody'>
                            <TableRow dataTest='dhis2-uicore-tablerow'>
                                <TableCell dataTest='dhis2-uicore-tablecell'>
                                    ID
                                </TableCell>
                                <TableCell dataTest={`details-id`}>
                                    {item.id}
                                </TableCell>
                            </TableRow>
                            <TableRow dataTest='dhis2-uicore-tablerow'>
                                <TableCell dataTest='dhis2-uicore-tablecell'>
                                    Name
                                </TableCell>
                                <TableCell dataTest={`details-name`}>
                                    {item.name}
                                </TableCell>
                            </TableRow>
                            <TableRow dataTest='dhis2-uicore-tablerow'>
                                <TableCell dataTest='dhis2-uicore-tablecell'>
                                    Created
                                </TableCell>
                                <TableCell dataTest={`details-created`}>
                                    {item.created}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                );
            })}
        </div>
    );
}
