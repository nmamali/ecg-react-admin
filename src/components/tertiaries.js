import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    TextInput,
    Create,
    Filter, Edit

} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";

const TertiaryFilter = (props) => (
    <Filter {...props}>
        <TextInput
            label="Search"
            name="Search"
            source="name"
            alwaysOn
        />
    </Filter>
);

export const TertiaryList = props => (
    <List  filters={<TertiaryFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const TertiaryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput
                source="name"
                name="name"
                fullWidth={true}
            />
            <TextInput
                source="imageUrl"
                name="imageUrl"
                fullWidth={true}
            />
            <TextInput
                source="websiteUrl"
                name="websiteUrl"
                fullWidth={true}
            />
            <TextInput
                source="location"
                name="location"
                fullWidth={true}
            />
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}
            />

            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}

            />

        </SimpleForm>
    </Create>
);


export const TertiaryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput
                source="name"
                name="name"
                fullWidth={true}

            />
            <TextInput
                source="imageUrl"
                name="imageUrl"
                fullWidth={true}

            />
            <TextInput
                source="websiteUrl"
                name="websiteUrl"
                fullWidth={true}

            />
            <TextInput
                source="location"
                name="location"
                fullWidth={true}
            />
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}
            />

            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}
            />

        </SimpleForm>
    </Edit>
);