import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    TextInput,
    Create,
    Filter, Edit, Show, SimpleShowLayout, ImageField, RichTextField, DateField, ImageInput

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
        <Datagrid rowClick="show">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const TertiaryCreate = props => (
    <Create {...props} title={"Create New Tertiary"}>
        <SimpleForm>
            <TextInput
                source="name"
                name="name"
                fullWidth={true}
                required={true}
                resettable={true}
            />
            <TextInput
                source="location"
                name="location"
                fullWidth={true}
                required={true}
                resettable={true}
                required={true}
            />
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}
                type={"url"}
                resettable={true}
                required={true}
            />
            <TextInput
                source="websiteUrl"
                name="websiteUrl"
                fullWidth={true}
                type={"url"}
                resettable={true}
                required={true}
            />
            <ImageInput
                source="pictures"
                label="Related pictures"
                accept="image/*" name={""}
                placeholder={<p>Drop your image here</p>}
                sx={"post-image"}
            >
                <ImageField
                    source="imageUrl"
                    title="title"
                    className={"post-image"}
                    sx={{
                        '& .RaImageField-image': {
                            width: 200,
                            height: 200,
                        },
                    }}
                />
            </ImageInput>

            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}
            />

        </SimpleForm>
    </Create>
);


export const TertiaryEdit = props => (

    <Edit {...props} title={"Edit Tertiary"}>
        <SimpleForm>
            <TextInput
                source="name"
                name="name"
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
            <ImageInput
                source="pictures"
                label="Related pictures"
                accept="image/*" name={""}
                placeholder={<p>Drop your image here</p>}
                sx={"post-image"}
            >
                <ImageField
                    source="imageUrl"
                    title="title"
                    className={"post-image"}
                    sx={{
                        '& .RaImageField-image': {
                            width: 200,
                            height: 200,
                        },
                    }}
                />
            </ImageInput>

            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}
            />

        </SimpleForm>
    </Edit>
);

export const TertiaryShow = () => (
    <Show title={"View Tertiary Post"}>
        <SimpleShowLayout>
            <TextField source="websiteUrl" />
            <TextField source="location" />
            <TextField source="applicationUrl" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);