import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    SelectInput,
    TextInput,
    Edit,
    Create,
    DateField,
    Filter

} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import {bursaryCategories} from "../constants/constants";

const BursaryFilter = (props) => (
    <Filter {...props}>
        <TextInput
            placeholder={"search"}
            label="Search"
            source="title"
            alwaysOn
            fullWidth={true}
            name={"title"}/>
    </Filter>
);

export const BursaryList = props => (
    <List  filters={<BursaryFilter />} {...props}>
        <Datagrid rowClick="edit" width={"20%"}>
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const BursaryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput
                fullWidth={true}
                source="title"
                name={"title"}/>
            <SelectInput
                source="Category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={bursaryCategories}
                fullWidth={true}
            />
            <TextInput
                source="email"
                name="email"
                fullWidth={true}

            />
            <TextInput
                source="imageUrl"
                name="imageUrl"
                fullWidth={true}

            />
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}

            />
            <TextInput
                source="pdfUrl"
                name="pdfUrl"
                fullWidth={true}

            />
            <DateField
                source="closingDate"
                fullWidth={true}

            />
            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}/>

        </SimpleForm>
    </Edit>
);

export const BursaryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput
                source="title"
                fullWidth={true}

                name={"title"}
            />
            <TextInput
                source="company"
                name={"company"}
                fullWidth={true}

            />
            <SelectInput
                source="Category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={bursaryCategories}
                fullWidth={true}
            />
            <TextInput
                source="email"
                name="email"
                fullWidth={true}

            />
            <TextInput
                source="imageUrl"
                name="imageUrl"
                fullWidth={true}

            />
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}

            />
            <TextInput
                source="pdfUrl"
                name="pdfUrl"
                fullWidth={true}

            />
            <DateField
                source="closingDate"
                fullWidth={true}

            />
            <RichTextInput
                sx={{ height: "100%"}}
                description multiple={true}
                fullWidth={true}
                source="description"
                validation={{ required: true }}
             name={"description"}
            />
        </SimpleForm>
    </Create>
);