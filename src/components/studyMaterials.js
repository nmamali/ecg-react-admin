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

import {subjects, grades, years, categories} from "../constants/constants"
const StudyMaterialFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

export const StudyMaterialsList = props => (
    <List filters={<StudyMaterialFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="title" />
            <TextField source="subject" />
            <TextField source="category" />
        </Datagrid>
    </List>
);

export const StudyMaterialsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput
                source="subject"
                optionText="subject"
                optionValue="subject"
                allowEmpty
                choices={subjects}
                fullWidth={true}
            />
            <SelectInput
                source="category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={categories}
                fullWidth={true}

            />
            <SelectInput
                source="grade"
                optionText="grade"
                optionValue="grade"
                allowEmpty
                choices={grades}
                fullWidth={true}

            />
            <SelectInput
                source="name"
                optionText="year"
                optionValue="year"
                allowEmpty
                choices={years}
                fullWidth={true}

            />
            <TextInput
                source="fileUrl"
                fullWidth={true}

            />
        </SimpleForm>
    </Create>
);


export const StudyMaterialsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput
                source="subject"
                optionText="subject"
                optionValue="subject"
                allowEmpty
                choices={subjects}
                fullWidth={true}

            />
            <SelectInput
                source="category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={categories}
                fullWidth={true}

            />
            <SelectInput
                source="grade"
                optionText="grade"
                optionValue="grade"
                allowEmpty
                choices={grades}
                fullWidth={true}

            />
            <SelectInput
                source="name"
                optionText="year"
                optionValue="year"
                allowEmpty
                choices={years}
                fullWidth={true}

            />
            <TextInput
                source="fileUrl"
                fullWidth={true}

            />
        </SimpleForm>
    </Edit>
);