import React from 'react';
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui';
export default function Program({
    programsData,
    handleSingleProgramClick,
    type,
}) {
    let dataTestAttribute =
        type === 'program' ? 'list-program' : 'list-dataSet';

    return (
        <>
            <div>
                <h1>List</h1>
                <Menu>
                    {programsData.map((item) => {
                        return (
                            <MenuItem
                                key={item.id}
                                dataTest={`${dataTestAttribute}-${item.id}`}
                                label={item.name}
                                onClick={() =>
                                    handleSingleProgramClick(item.id)
                                }
                            />
                        );
                    })}
                </Menu>
            </div>
        </>
    );
}
