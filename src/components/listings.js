import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Edit,
    Create, DateInput, Filter,
} from 'react-admin';
import {RichTextInput} from 'ra-input-rich-text';
import {categoryChoices} from "../constants/constants";


const ListingsFilter = (props) => (
    <Filter {...props}>
        <TextInput
            label="Search"
            name="title"
            source="title"
            alwaysOn
        />
    </Filter>
);

export const JobsList = props => (
    <List  filters={<ListingsFilter />}  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <TextField source="category" />
        </Datagrid>
    </List>
);

export const JobsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput
                source="title"
                name="title"
                fullWidth={true}
            />
            <TextInput
                fullWidth={true}
                source="location"
                name="location"
            />
            <TextInput
                fullWidth={true}
                source="salary"
                name="salary"
            />
            <SelectInput
                fullWidth={true}
                source="Category"
                name="Category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={categoryChoices}
            />
            <TextInput
                fullWidth={true}
                source="email"
                name="email"
            />
            <TextInput
                fullWidth={true}
                source="imageUrl"
                name="imageUrl"
            />
            <TextInput
                fullWidth={true}
                source="applicationUrl"
                name="applicationUrl"
            />
            <DateInput
                fullWidth={true}
                source="closingDate"
                name="closingDate"
            />
            <RichTextInput
                description multiple={true}
                fullWidth={true}
                source="description"
                name="description"
                validation={{ required: true }}/>


        </SimpleForm>
    </Create>
);


export const ListingsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput
                source="title"
                name="title"
                fullWidth={true}
            />
            <TextInput
                fullWidth={true}
                source="location"
                name="location"
            />
            <TextInput
                fullWidth={true}
                source="salary"
                name="salary"
            />
            <SelectInput
                fullWidth={true}
                source="Category"
                name="Category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={categoryChoices}
            />
            <TextInput
                fullWidth={true}
                source="email"
                name="email"
            />
            <TextInput
                fullWidth={true}
                source="imageUrl"
                name="imageUrl"
            />
            <TextInput
                fullWidth={true}
                source="applicationUrl"
                name="applicationUrl"
            />
            <DateInput
                fullWidth={true}
                source="closingDate"
                name="closingDate"
            />
            <RichTextInput
                description multiple={true}
                fullWidth={true}
                source="description"
                name="description"
                validation={{ required: true }}
            />

        </SimpleForm>
    </Edit>
);