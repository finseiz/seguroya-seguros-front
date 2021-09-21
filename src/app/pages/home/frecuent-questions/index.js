import React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { GenealTab } from './GenealTab';
import { CarsTab } from './CarsTab';
import { LifeTab } from './LifeTab';
import { HealthTab } from './HealthTab';

export const FrecuentQuestions = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="container-fluid p-0">

            <div className="home-pages__title text-center mt-3">
                Preguntas frecuentes
            </div>

            <div className="home-pages__content">
                <Box sx={{ width: '100%', marginTop: '30px' }}>
                    <Box>
                        <AntTabs value={value} onChange={handleChange} aria-label="ant example" centered>
                            <AntTab label="Todo" />
                            <AntTab label="Autos" />
                            <AntTab label="Vida" />
                            <AntTab label="Salud" />
                        </AntTabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <BaseQuestionPanel> 
                            <GenealTab />
                        </BaseQuestionPanel>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BaseQuestionPanel> 
                            <CarsTab />
                        </BaseQuestionPanel>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <BaseQuestionPanel> 
                            <LifeTab />
                        </BaseQuestionPanel>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <BaseQuestionPanel> 
                            <HealthTab />
                        </BaseQuestionPanel>
                    </TabPanel>
                </Box>
            </div>

        </div>
    )
}


const BaseQuestionPanel = ({children}) => {
    return (
        <div className="container-fluid bg-white">
            <div className="mx-3">
                <div className="container py-5">
                    { children }
                </div>
            </div>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

const AntTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#00b3d9',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#001166',
    '&.Mui-selected': {
        color: '#00b3d9',
        fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#00b3d9',
    },
}));