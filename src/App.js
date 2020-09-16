import React, { useState, useEffect } from 'react';
import i18n from '@dhis2/d2-i18n';
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui';
import styles from './App.module.css';
import { useDataQuery } from '@dhis2/app-runtime';
import Program from './Program';
import Details from './Details';

const MyApp = () => {
    const [programsData, setProgramsData] = useState([]);
    const [dataSet, setDataSet] = useState([]);

    const [currentID, setcurrentID] = useState();

    // ClickedStates
    const [programClicked, setprogramClicked] = useState(false);
    const [dataClicked, setdataClicked] = useState(false);
    const [singleProgramClicked, setsingleProgramClicked] = useState(false);

    const query = {
        programs: {
            resource: 'programs',
            params: {
                paging: false,
                fields: ['id', 'name', 'created'],
            },
        },
        dataSet: {
            resource: 'dataSets',
            params: {
                paging: false,
                fields: ['id', 'name', 'created'],
            },
        },
    };

    const { loading, error, data } = useDataQuery(query);
    if (error) {
        return <p>Error</p>;
    }

    useEffect(() => {
        if (!loading) {
            setProgramsData(data.programs.programs);
            setDataSet(data.dataSet.dataSets);
        }
    }, [loading]);

    const handleProgramClick = () => {
        setprogramClicked(true);
        setdataClicked(false);
    };

    const handleDataClick = () => {
        setdataClicked(true);
        setprogramClicked(false);
    };

    const handleSingleProgramClick = (id) => {
        setcurrentID(id);
        setsingleProgramClicked(true);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.menu} data-test-id='menu'>
                <MenuSectionHeader label={i18n.t('Menu')} />
                <Menu>
                    <MenuItem
                        label={i18n.t('Programs')}
                        dataTest='menu-programs'
                        onClick={handleProgramClick}
                    />
                    <MenuItem
                        label={i18n.t('Data sets')}
                        dataTest='menu-dataSets'
                        onClick={handleDataClick}
                    />
                </Menu>
            </nav>
            {programClicked && (
                <div className={styles.container}>
                    <Program
                        programsData={programsData}
                        type='program'
                        handleSingleProgramClick={
                            handleSingleProgramClick
                        }></Program>
                </div>
            )}
            {dataClicked && (
                <div className={styles.container}>
                    <Program
                        programsData={dataSet}
                        type='dataSet'
                        handleSingleProgramClick={
                            handleSingleProgramClick
                        }></Program>
                </div>
            )}
            {singleProgramClicked && (
                <div className={styles.container}>
                    <Details
                        programsData={programClicked ? programsData : dataSet}
                        dataTest={`details-${currentID}`}
                        currentID={currentID}></Details>
                </div>
            )}
        </div>
    );
};

export default MyApp;
