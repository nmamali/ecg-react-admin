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
    Filter, required,
    SimpleShowLayout,
    RichTextField,
    Show,
    ImageInput,
    ImageField,
    FileInput,
    FileField,
    SelectArrayInput, DateInput,
} from 'react-admin';
import {
    RichTextInput,

} from 'ra-input-rich-text';
import {bursaryCategories} from "../constants/constants";

const BursaryFilter = (props) => (
    <Filter {...props} >
        <TextInput
            className={"search-input"}
            placeholder={"search"}
            label="Search"
            source="title"
            alwaysOn
            sx={{width: 850}}
            fullWidth={true}
            name={"title"}
        />
    </Filter>
);

export const BursaryList = props => (
    <List  filters={<BursaryFilter />} {...props}>
        <Datagrid rowClick="edit" width={"20%"}>
            <TextField
                source="title"
            />
        </Datagrid>
    </List>
);

export const BursaryEdit = props => (
    <Edit {...props} title={"Edit Bursary"}>
        <SimpleForm>
            <TextInput
                fullWidth={true}
                source="title"
                name={"title"}
                placeholder={"Bursary Title"}
            />
            <SelectInput
                source="category"
                optionText="category"
                optionValue="category"
                allowEmpty
                choices={bursaryCategories}
                fullWidth={true}
                resettable
                required={true}
            />
            <TextInput
                source="email"
                name="email"
                fullWidth={true}
                type={'email'}
            />
            <DateField
                source="closingDate"
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
            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}
                type={'url'}
            />

            <FileInput
                source="pdfUrl"
                label="Related files"
                accept="application/pdf"
                name={"pdfUrl"}
            >
                <FileField
                    source="pdfUrl"
                    title="PDF Application Form"
                />
            </FileInput>
            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}
                sx={{
                    height: 40000
                }}
            />

        </SimpleForm>
    </Edit>
);


const validateTitle = [required("Title is required")];

export const BursaryCreate = props => (
    <Create {...props} title={"Create Bursary Post"} >
        <SimpleForm>
            <TextInput
                fullWidth={true}
                source="title"
                name={"title"}
                validate={validateTitle}
                placeholder={"Bursary Title"}
                resettable
            />
            <SelectArrayInput
                label="Faculty they fund"
                source="Category"
                choices={bursaryCategories}
                optionText="category"
                optionValue="category"
                options={{ autoWidth: true }}
                resettable
                sx={{width: 600}}

            />
            <TextInput
                source="email"
                name="email"
                fullWidth={true}
                type={'email'}
            />

            <TextInput
                source="applicationUrl"
                name="applicationUrl"
                fullWidth={true}
                type={'url'}
            />
            <DateInput
                fullWidth={true}
                source="closingDate"
                name="closingDate"
            />
            <ImageInput
                source="pictures"
                label="Picture"
                multiple={true}
                accept="image/*" name={""}
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


            <FileInput
                source="pdfUrl"
                label="PDF Application Form"
                accept="application/pdf"
                name={"pdfUrl"}
                multiple={true}

            >
                <FileField
                    source="pdfUrl"
                    title="PDF Application Form"
                />
            </FileInput>
            <RichTextInput
                fullWidth={true}
                source="description"
                name={"description"}
                sx={{
                    height: 40000
                }}
            />
        </SimpleForm>
    </Create>
);

export const BursaryShow = () => (
    <Show title={"View Bursary Post"}>
        <SimpleShowLayout>
            <ImageField
                source="imageUrl"
                title="Image"
                fullWidth={false}
                sx={{
                    '& .RaImageField-image': {
                        width: 200,
                        height: "100%",
                    },
                }}
            />
            <TextField source="title" />
            <TextField source="company" />
            <RichTextField source="description" />
            <DateField label="closing Date" source="closingDate" />
        </SimpleShowLayout>
    </Show>
);