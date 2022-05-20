import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    SelectInput,
    TextInput,
    Create,
    Filter,
    Edit

} from 'react-admin';

import {subjects, papers, years, categories, titles, terms} from "../constants/constants"


const QpFilter = (props) => (
    <Filter  {...props}>
        <TextInput
            label="Search"
            source="subject"
            alwaysOn />
    </Filter>
);
export const QpList = props => (
    <List filters={<QpFilter />}  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="subject" />
            <TextField source="category" />
            <TextField source="paper" />
        </Datagrid>
    </List>
);

export const QpCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput
                fullWidth={true}
                source="subject"
                optionText="subject"
                optionValue="subject"
                allowEmpty
                choices={subjects}
            />
            <SelectInput
                fullWidth={true}
                source="term"
                optionText="term"
                optionValue="term"
                allowEmpty
                choices={terms}
            />
            <SelectInput
                fullWidth={true}
                source="category"
                optionText="category"
                optionValue="category"
                allowEmpty choices={categories}
            />
            <SelectInput
                source="year"
                optionText="year"
                optionValue="year"
                allowEmpty
                choices={years}
                fullWidth={true}

            />
            <SelectInput
                source="paper"
                optionText="paper"
                optionValue="paper"
                allowEmpty
                choices={papers}
                fullWidth={true}

            />
            <TextInput
                source="questionPaper"
                fullWidth={true}

            />
            <TextInput
                source="memo"
                fullWidth={true}

            />
            <TextInput
                source="addendum"
                fullWidth={true}
            />
        </SimpleForm>
    </Create>
);




export const QpEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput
                fullWidth={true}
                source="subject"
                optionText="subject"
                optionValue="subject"
                allowEmpty
                choices={subjects}
            />
            <SelectInput
                fullWidth={true}
                source="term"
                optionText="term"
                optionValue="term"
                allowEmpty
                choices={terms}
            />
            <SelectInput
                fullWidth={true}
                source="category"
                optionText="category"
                optionValue="category"
                allowEmpty choices={categories}
            />
            <SelectInput
                source="year"
                optionText="year"
                optionValue="year"
                allowEmpty
                choices={years}
                fullWidth={true}

            />
            <SelectInput
                source="paper"
                optionText="paper"
                optionValue="paper"
                allowEmpty
                choices={papers}
                fullWidth={true}

            />
            <TextInput
                source="questionPaper"
                fullWidth={true}

            />
            <TextInput
                source="memo"
                fullWidth={true}

            />
            <TextInput
                source="addendum"
                fullWidth={true}
            />
        </SimpleForm>
    </Edit>
);